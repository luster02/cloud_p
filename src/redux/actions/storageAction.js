import firebase from 'firebase/app'
import 'firebase/storage'

export const UPLOAD_FILE = "UPLOAD_FILE"
export const UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS"
export const UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR"

export const UPDATE_FILE = "UPDATE_FILE"
export const UPDATE_FILE_SUCCESS = "UPDATE_FILE_SUCCESS"
export const UPDATE_FILE_ERROR = "UPDATE_FILE_ERROR"

export const DELETE_FILE = "DELETE_FILE"
export const DELETE_FILE_SUCCESS = "DELETE_FILE_SUCCESS"
export const DELETE_FILE_ERROR = "DELETE_FILE_ERROR" 

export const GET_ALL_FILES = "GET_ALL_FILES"
export const GET_ALL_FILES_SUCCESS = "GET_ALL_FILES_SUCCESS"
export const GET_ALL_FILES_ERROR = "GET_ALL_FILES_ERROR"

export const GET_ONE_FILE = "GET_ONE_FILE"
export const GET_ONE_FILE_SUCCESS = "GET_ONE_FILE_SUCCESS"
export const GET_ONE_FILE_ERROR = "GET_ONE_FILE_ERROR"

const storageRefUp = ( uid, file={} ) => firebase.storage().ref(`${uid}/files/${file.name}`)
const storageRefOne = (uid) => firebase.storage().ref(`${uid}/files`)
const storageRefAll = (uid) => firebase.storage().ref(`${uid}`)

export const uploadFileAction = ({uid, file}) => dispatch => {
    dispatch({
        type: UPLOAD_FILE
    })
    return storageRefUp(uid, file).put(file).then( snapshot=> {
        dispatch({
            type: UPLOAD_FILE_SUCCESS,
            payload: 'ok'
        })
        return {ok : 'ok'}
    })
    .catch(error => {
        dispatch({
            type: UPLOAD_FILE_ERROR,
            payload: error.message
        })
    })

}

export const getAllFilesAction = ({uid}) => dispatch => {
    dispatch({
        type: GET_ALL_FILES
    }) 
    return storageRefAll(uid).child('files').listAll().then(({items }) => {
        const array = []
        items.forEach(({name}) => {
            const type = name.split('.').pop()
            array.push({name, type})
        })
        dispatch({
            type: GET_ALL_FILES_SUCCESS,
            payload: array
        })
        
    })
    .catch(error => {
        dispatch({
            type: GET_ALL_FILES_ERROR,
            payload: error.message
        })
    })

}


export const getOneFileAction = ({uid,name}) => (dispatch, getState) => {
    dispatch({
        type: GET_ONE_FILE
    })
    const {storage:{array}} = getState()
    console.log(array)
    const { storage: {current} } = getState()
    return storageRefOne(uid).child(name).getDownloadURL().then((url)=>{
        current.push(url)
        dispatch({
            type: GET_ONE_FILE_SUCCESS,
            //payload: url
        })
        return {ok: 'ok'}
    }) 
    .catch(error => {
        dispatch({
            type: GET_ONE_FILE_ERROR,
            payload: error.message
        })
    })
}