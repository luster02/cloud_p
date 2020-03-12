import { 
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_ERROR,
    UPDATE_FILE,
    UPDATE_FILE_SUCCESS,
    UPDATE_FILE_ERROR,
    DELETE_FILE,
    DELETE_FILE_SUCCESS,
    DELETE_FILE_ERROR,
    GET_ALL_FILES,
    GET_ALL_FILES_SUCCESS,
    GET_ALL_FILES_ERROR,
    GET_ONE_FILE,
    GET_ONE_FILE_SUCCESS,
    GET_ONE_FILE_ERROR,
} from '../actions/storageAction'

const initialState = {
    loading: false,
    uploading: false,
    array: [],
    current: [],
    error: '',
    ok: ''
}

export const storageReducer = (state = initialState, actions) => {
    switch(actions.type) {

        case UPLOAD_FILE: 
            return {
                ...state,
                uploading: true
            }

        case UPLOAD_FILE_SUCCESS: 
            return {
                ...state,
                uploading: false,
                current: actions.payload
            }

        case UPLOAD_FILE_ERROR: 
            return {
                ...state,
                uploading: false,
                error: actions.payload
            }

        case UPDATE_FILE: 
            return {

            }

        case UPDATE_FILE_SUCCESS: 
            return {

            }

        case UPDATE_FILE_ERROR: 
            return {

            }

        case DELETE_FILE: 
            return {

            }

        case DELETE_FILE_SUCCESS: 
            return {

            }

        case DELETE_FILE_ERROR: 
            return {

            }

        case GET_ALL_FILES: 
            return {
                ...state,
                loading: true
            }

        case GET_ALL_FILES_SUCCESS: 
            return {
                ...state,
                loading: false,
                array: actions.payload
            }

        case GET_ALL_FILES_ERROR: 
            return {
                ...state,
                loading: false,
                error: actions.payload
            }   
        
        case GET_ONE_FILE: 
            return {
                ...state,
                loading: true
            }

        case GET_ONE_FILE_SUCCESS: 
            return {
                ...state,
                loading: false, 
                //current: actions.payload
            }

        case GET_ONE_FILE_ERROR: 
            return {
                ...state,
                loading: false,
                error: actions.payload
            }

        
        default:
            return {
                ...state
            }
    }
}

