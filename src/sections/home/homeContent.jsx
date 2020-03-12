import React from 'react'
import { LoaderSpinner, SpinnerPage } from '../../components/LoaderSpiner'

import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBContainer, MDBCardTitle, MDBCardGroup, MDBIcon } from 'mdbreact'

const HomeContent = ({ onUpload, loading, uploading, array, uid, current }) => {
    const large = array.length || 0

    const fileOnChange = (e) => {
        const file = e.target.files[0]
        onUpload(file)
    }

    const renderCards = () => {

        const renderDocumentIcon = () => <span style={{'color': '#4169E1'}} ><MDBIcon icon="file-alt"     size="4x" /></span>
        const renderPdfDocument = () =>  <span style={{'color': '#ff5349'}} ><MDBIcon icon="file-pdf"     size="4x" /></span>
        const renderImageIcon = () =>    <span style={{'color': '#eed202'}} ><MDBIcon far icon="image"    size="4x" /></span>
        const renderMusicIcon = () =>    <span style={{'color': '#6600cc'}} ><MDBIcon icon="music"        size="4x" /></span>
        const renderFileIcon = () =>     <span style={{'color': '#808080'}} ><MDBIcon far icon="file"     size="4x" /></span>
        const renderVideoIcon = () =>    <span style={{'color': '#002e5c'}} ><MDBIcon icon="video"        size="4x"/></span>

        const compareIcon = (type) => {
            type = type.toString()
            if (type === 'png' || type === 'jpeg' || type === 'jpg') {
                return renderImageIcon()
            } else if (type === 'pdf') {
                return renderPdfDocument()
            } else if (type === 'mp3') {
                return renderMusicIcon()
            } else if (type === 'docx' || type === 'doc') {
                return renderDocumentIcon()
            } else if(type === 'mp4'){
                return renderVideoIcon()
            }else {
                return renderFileIcon()
            }
        }

        return (
            <MDBCardGroup column>
                {array.map(({ name, type }, index) => {
                    return (
                        <MDBCard key={index}>
                            <MDBCardTitle>
                                <p className="h5 text-center">
                                    <span className="d-inline-block text-truncate" style={{maxWidth: "200px"}}>
                                        {name}
                                    </span>
                                </p>
                            </MDBCardTitle>
                            <MDBCardBody>
                                <div className="text-center">
                                    {compareIcon(type)}
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    )
                })}
            </MDBCardGroup>
        )
    }

    return (
        <div className="container">
            <MDBRow className="my-4" center>
                <MDBCol size="5">
                    <MDBCard>
                        <MDBCardBody>
                            {uploading && <LoaderSpinner />}
                            <div className="input-group my-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">
                                        Upload
                                    </span>
                                </div>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile01"
                                        aria-describedby="inputGroupFileAddon01"
                                        onChange={fileOnChange}
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">
                                        Choose file
                                    </label>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow center>
                <MDBContainer>
                    {loading && <SpinnerPage />}
                    {large > 0
                        ? renderCards()
                        : <p className="text-center h5" >no results</p>
                    }
                </MDBContainer>
            </MDBRow>
        </div>
    )

}

export default HomeContent