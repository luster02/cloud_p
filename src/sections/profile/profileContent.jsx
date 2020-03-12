import React from 'react'
import { LoaderSpinner } from '../../components/LoaderSpiner';
import Alert from '../../components/Alert';
import { MDBContainer, MDBCol, MDBRow } from 'mdbreact'
import imgProfile from '../../assets/profile.png'

const ProfileContent = ({ user, ok, fetching, onEmailVerify }) => {

    const renderAlert = () => {
        return (
            <div>
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                    Your email is not verified! please confirm your email address
                    <button className="btn btn-link" onClick={onEmailVerify} >confirm Here</button>.
                </div>
                {ok && <Alert color="success" message="an email has been sent to you please check your inbox" />}
            </div>
        )
    }

    const styles = {
        'borderRadius': '50%',
        'width': '400px'
    }

    const photoUrl = user.photoURL ? user.photoURL : imgProfile

    return (
        <div>
            {!user.emailVerified && renderAlert()}
            <MDBContainer className="my-3" >
                {fetching && <LoaderSpinner />}
                <MDBRow center>
                    <MDBCol size="2">
                        <div className="view overlay zoom">
                            <img style={styles} className="img-fluid" src={photoUrl} alt="" />
                            <div className="mask flex-center waves-effect waves-light">
                                <p className="white-dark"><strong>update photo</strong></p>
                            </div>
                        </div>
                    </MDBCol>
                    <MDBCol size="6">
                        <h1>{user.displayName}</h1>
                        <span className="my-2 h3">{user.email}</span>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )

}


export default ProfileContent