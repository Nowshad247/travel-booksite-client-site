import React from 'react';
import './Header.css';
import logo from './logo.png';
import { Container, Nav, NavDropdown, Navbar, button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, signoutuser } = useAuth();
    const signOut = () => {
        signoutuser();
    }
    return (
        <div className='container'>
            <Navbar collapseOnSelect sticky="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={logo} alt="" className='img-fluid' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/my-order">My Orders</Nav.Link>
                            <Nav.Link as={Link} to="/Manage-all-orders">Manage All Orders</Nav.Link>
                            <Nav.Link as={Link} to="/add-new-service">add new service</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/profile">My Profile</Nav.Link>
                            {
                                user.email ? <Nav.Link onClick={signOut}>Sign out </Nav.Link> : <Nav.Link as={Link} to="/login">Login </Nav.Link>
                            }
                            <Nav.Link to="/my-profile">{user?.displayName}</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;