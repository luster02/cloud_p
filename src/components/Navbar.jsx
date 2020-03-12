import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useUser } from 'reactfire'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
    MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
    MDBDropdown, MDBDropdownToggle, MDBIcon, MDBDropdownItem, MDBDropdownMenu
} from "mdbreact";

import { logoutAction } from '../redux/actions/loginActions'

const Navbar = ({ logoutAction }) => {
    const User = useUser()
    const history = useHistory()

    let [isOpen, setOpen] = useState(false)

    const loginPath = [
        { name: 'Login', path: '/login' },
        { name: 'Register', path: '/register' }
    ]

    const generalPath = [
        
    ]

    const toggleCollapse = () => {
        setOpen(isOpen = !isOpen)
    }

    const logOutF = () => {
        const res = window.confirm('Are you sure to log out')
        if(res){
            logoutAction()
            return
        }
    }   

    const navigate = (path) => {
        history.push(path)
    } 

    const mapLoginPath = () => {
        return (
            loginPath.map(path => {
                return (
                    <MDBNavItem key={path.name}>
                        <MDBNavLink to={path.path}>{path.name}</MDBNavLink>
                    </MDBNavItem>
                )
            })
        )
    }

    const mapGeneralPath = () => {
        return (
            generalPath.map(path => {
                return (
                    <MDBNavItem key={path.name}>
                        <MDBNavLink to={path.path}>{path.name}</MDBNavLink>
                    </MDBNavItem>
                )
            })
        )
    }

    return (
        <MDBNavbar color="elegant-color-dark" dark expand="md">
            <MDBContainer>
                <MDBNavbarBrand>
                    <strong className="white-text">Navbar</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarSupportedContent" isOpen={isOpen} navbar>
                    <MDBNavbarNav right>
                        {User
                            ? mapGeneralPath()
                            : mapLoginPath()
                        }
                        {User && <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                    <MDBDropdownItem onClick={() => navigate('/profile')}>Profile</MDBDropdownItem>
                                    <MDBDropdownItem onClick={logOutF}><span className="text-danger">Log out</span></MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>}
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

const mapStateToProps = ({ login }) => {
    return {
        fetching: login.fetching,
        logged: login.logged,
    }
}

const actions = {
    logoutAction
}

export default connect(mapStateToProps, actions)(Navbar);