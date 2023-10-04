import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../Styles/navbar.css'; 

function NavBar() {
    const location = useLocation();

    return (
        <>
            <Navbar bg="light" className={`mb-3 rounded ${styles.bankNameBar}`}>
                <Container>
                    <Navbar.Brand>Stephan Bank</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="light" expand="lg" className={`mb-3 rounded ${styles.navBar}`}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" activeKey={location.pathname}>
                            <Nav.Link as={NavLink} to="/" exact data-tooltip="Home Page">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/createaccount" data-tooltip="Create Account Page">Create Account</Nav.Link>
                            <Nav.Link as={NavLink} to="/login" data-tooltip="Login Page">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="/deposit" data-tooltip="Deposit Page">Deposit</Nav.Link>
                            <Nav.Link as={NavLink} to="/withdraw" data-tooltip="Withdraw Page">Withdraw</Nav.Link>
                            <Nav.Link as={NavLink} to="/alldata" data-tooltip="All Data Page">All Data</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;