import React from 'react';
import { useForm } from 'react-hook-form'
import { enviroments } from '../../../enviroments/enviroments'
import { MDBBtn, MDBRow, MDBCol, MDBContainer, MDBCard, MDBCardBody } from 'mdbreact'
import Alert from '../../../components/Alert'

const ResetPassContent = ({ fetching, error, onData, ok }) => {

    const inputs = [
        { req: true, id: 'email', label: 'Email', Name: 'email', reqMess: 'email is required', placeholder: 'example@email.com', type: 'email', patt: enviroments.pattern },
    ]

    const { register, errors, handleSubmit, } = useForm()

    const onSubmit = (data, event) => {
        onData(data)
        event.target.reset()
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
                    <p className="h2 text-center mb-5">Reset your password</p>
                    <MDBCard className="card-login">
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
                    <div className="my-5">
                        {error && <Alert message={error} color="danger" />}

                        {ok && <Alert 
                        message="an email has been sent to you please check your inbox" 
                        color="success" />}
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )

}

export default ResetPassContent