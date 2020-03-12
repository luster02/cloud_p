import React, { useEffect } from 'react'
import { useUser } from 'reactfire'
import { connect } from 'react-redux'
import { uploadFileAction, getAllFilesAction } from '../../redux/actions/storageAction'
import HomeContent from './homeContent'

const HomeContainer = ({loading, uploading, array, current, error, ok, uploadFileAction, getAllFilesAction}) => {
    const user = useUser()
    const { uid } = user || {}

    useEffect(() => {
        if(uid){
            getAllFilesAction({uid})
        }
    },[getAllFilesAction, uid])

    const uploadFile = async (file) => {
        if(uid){
            const res = await uploadFileAction({uid, file})
            if(res) {
                alert('upload sucessfull !!!')
                getAllFilesAction({uid})
            }
        }
    }

    return(
        <HomeContent
            onUpload={uploadFile}
            loading={loading}
            uploading={uploading}
            array={array}
            current={current}
        />
    )

}

const mapStateToProps = ({storage}) => {
    return {
        loading: storage.loading, 
        uploading: storage.uploading,
        array: storage.array, 
        current: storage.current, 
        error: storage.error, 
        ok: storage.ok, 
    }
}

const actions = {
    uploadFileAction, 
    getAllFilesAction
}

export default connect(mapStateToProps, actions)(HomeContainer)