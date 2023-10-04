import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';

function NavBar() {
    const location = useLocation();

    return (
        <Navbar bg="light" expand="lg" className="mb-3 rounded">
            <Container>
                <Navbar.Brand as={Link} to="/">Stephan Bank</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" activeKey={location.pathname}>
                        <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/createaccount">Create Account</Nav.Link>
                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={NavLink} to="/deposit">Deposit</Nav.Link>
                        <Nav.Link as={NavLink} to="/withdraw">Withdraw</Nav.Link>
                        <Nav.Link as={NavLink} to="/alldata">AllData</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;