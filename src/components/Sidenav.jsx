import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBIcon } from "mdbreact";
import { useUser } from 'reactfire'

const Sidenav = ({ togg }) => {
    const user = useUser()

    let [sideNavLeft, setSide] = useState(true)

    const sidenavToggle = () => {
        setSide(sideNavLeft = !sideNavLeft)
        togg(sideNavLeft)
    }

    const showButton = () => {
        const conditionStyle = sideNavLeft ? 'text-right' : 'text-left ml-3'
        const conditionalColor = sideNavLeft ? 'success' : 'danger'

        return (
            <div className={conditionStyle}>
                <MDBBtn onClick={sidenavToggle} outline size="sm" color={conditionalColor}>
                    <MDBIcon icon="bars" />
                </MDBBtn>
            </div>
        )
    }

    const ShowCompleteItems = () => {
        return (
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action h5 white-text bg-dark">Home</Link>
                <Link to="/profile" className="list-group-item list-group-item-action h5 white-text bg-dark">Profile</Link>
            </div>
        )
    }


    const showOnlyIcons = () => {
        return (
            <div className="list-group list-group-flush">
                <Link to="/" className="list-group-item list-group-item-action white-text bg-dark">
                    <div className="text-right">
                        <span><MDBIcon icon="home" size="2x" className="mr-1" /></span>
                    </div>
                </Link>
                <Link to="/profile" className="list-group-item list-group-item-action white-text bg-dark">
                    <div className="text-right">
                        <span><MDBIcon icon="user-alt" size="2x" className="mr-1" /></span>
                    </div>
                </Link>
            </div>
        )
    }

    return (
        user 
        ? <div className="bg-dark white-text" id="sidebar-wrapper">
            {showButton()}
            {!sideNavLeft && ShowCompleteItems()}
            {sideNavLeft && showOnlyIcons()}
        </div>
        : <div></div>
    )
}

export default Sidenav