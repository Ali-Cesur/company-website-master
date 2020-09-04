import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const navbar = () => {
    return (

        <Navbar >
                <Navbar.Brand as={Link} to="/">Company Website</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/konuanlatimi">Konu Anlatımı</Nav.Link>
                    <NavDropdown title="Additional Menus" id="collasible-nav-dropdown" color='red'>
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/classselection">Class Selection</Nav.Link>
                    
                    <Nav.Link as={Link} to="/sorucozumu">Soru Çözümü</Nav.Link>

                    <Nav.Link as={Link} to="/log-in">Login</Nav.Link>


                </Nav>
        </Navbar>

    )
}

export default navbar;