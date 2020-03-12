import React from 'react'
import { useForm } from 'react-hook-form'
import { enviroments } from '../../../enviroments/enviroments'
import { MDBBtn, MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'
import Alert from '../../../components/Alert'

const SignupContent = ({ fetching, error, onData, signinGoogleAction }) => {

    const inputs = [
        //{ req: true, id: 'displayName', label: 'Your name', Name: 'displayName', reqMess: 'Your name is required', placeholder: 'example name', type: 'text' },
        { req: true, id: 'email', label: 'Email', Name: 'email', reqMess: 'email is required', placeholder: 'example@email.com', type: 'email', patt: enviroments.pattern },
        { req: true, id: 'password', label: 'Password', Name: 'password', reqMess: 'please type your password', placeholder: '*******', type: 'password', min: 8, minMess: 'Password must be a minimum of 8 characters' },
        { req: true, id: 'password2', label: 'Repeat Password', Name: 'password2', reqMess: 'please type again your password', placeholder: '*******', type: 'password', min: 8, minMess: 'Password must be a minimum of 8 characters' }
    ]

    const { register, errors, handleSubmit, setError } = useForm()

    const onSubmit = (data, event) => {
        const { password, password2 } = data
        if (password !== password2) {
            setError("password", "notMatch", "password no match")
            setError("password2", "notMatch", "password no match")
            return
        } else {
            onData(data)
            event.target.reset()
        }
    }

    const spinnerButton = () => {
        return (
            <MDBBtn color="dark" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </MDBBtn>
        )
    }

    const normaButton = () => {
        return (
            <MDBBtn type="submit" color="dark">
                send
            </MDBBtn>
        )
    }

    const conditionalButton = () => {
        return (
            fetching
                ? spinnerButton()
                : normaButton()
        )
    }

    return (
        <MDBContainer>
            <MDBRow className="my-5" center>
                <MDBCol xs="10" xl="5" sm="9" lg="5" md="7">
                    <p className="h2 text-center mb-4">Sign up</p>
                    <MDBCard >
                        <MDBCardBody>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {inputs.map(({ Name, req, reqMess, placeholder, type, patt, min, minMess, id, label }) => {
                                    return (
                                        <div key={Name} className="form-group">
                                            <label htmlFor={id}>{label}</label>
                                            <input
                                                id={id}
                                                className="form-control"
                                                placeholder={placeholder}
                                                type={type}
                                                name={Name}
                                                ref={register({
                                                    required: {
                                                        value: req,
                                                        message: reqMess
                                                    },
                                                    pattern: {
                                                        value: patt
                                                    },
                                                    minLength: {
                                                        value: min,
                                                        message: minMess
                                                    }
                                                })}
                                            />
                                            <span className="text-danger text-small d-block mb-2">
                                                {errors[Name] && errors[Name].message}
                                            </span>
                                        </div>
                                    )
                                })}

                                {conditionalButton()}
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                    <div className="my-4 text-center">
                        <MDBBtn outline color="dark"  onClick={signinGoogleAction}>
                            <span className="mr-2">Sign in with google</span>
                            <MDBIcon fab icon="google" />
                        </MDBBtn>
                    </div>
                    <div className="my-5">
                        {error && <Alert message={error} color="danger" /> }
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default SignupContent