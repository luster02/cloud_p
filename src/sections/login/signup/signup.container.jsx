import React, {useEffect} from 'react'
import { connect } from 'react-redux'

import { registerAction, getSesionAction, signinGoogleAction, clearState } from '../../../redux/actions/loginActions'

import SignupContent from './signup.content'

const SignupContainer = ({fetching, error, registerAction, getSesionAction, signinGoogleAction, clearState}) => {

    const handleData = async (data) => {
        const { email, password } = data
        await registerAction({email, password})
        getSesionAction()
    }

    useEffect(() => {
        return(() => {
            clearState()
        })
    }, [clearState])

    return(
        <div>
            <SignupContent
                onData={handleData}
                fetching={fetching}
                error={error}
                signinGoogleAction={signinGoogleAction}
            />
        </div>
    )

}

const mapStateToProps = ({login}) => {
    return {
        fetching: login.fetching,
        error: login.error,
    }
}

const actions = {
    registerAction,
    getSesionAction,
    signinGoogleAction,
    clearState
}

export default connect(mapStateToProps, actions)(SignupContainer)