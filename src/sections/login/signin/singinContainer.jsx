import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { loginAction, getSesionAction, signinGoogleAction, clearState } from '../../../redux/actions/loginActions'
import SigninContent from './signinContent'


const SigninContainer = ({ fetching, error, loginAction, getSesionAction, signinGoogleAction, clearState }) => {

    const handleData = async (data) => {
        const { email, password } = data
        await loginAction({ email, password })   
        getSesionAction()
   
    }

    useEffect(() => {
        return(() => {
            clearState()
        })
    },[clearState])

    return (
        <div>
            <SigninContent
                onData={handleData}
                fetching={fetching}
                error={error}
                signinGoogleAction={signinGoogleAction}
            />
        </div>
    )

}

const mapStateToProps = ({ login }) => {
    return {
        fetching: login.fetching,
        error: login.error,
    }
}

const actions = {
    loginAction,
    getSesionAction,
    signinGoogleAction,
    clearState
}

export default connect(mapStateToProps, actions)(SigninContainer);