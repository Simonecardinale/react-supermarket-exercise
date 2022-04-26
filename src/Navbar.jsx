import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import "./App.css";

export default function NavbarEl() {
    const location = useLocation();

    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Supermarket App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" className="text-decoration-none text-black navEl p-3">
                                Home
                            </Link>
                        </Nav.Link>

                            {location.pathname !== '/account' && (
                                <Nav.Link>
                                    <Link to="/account" className="text-decoration-none text-black navEl p-3">
                                        Account
                                    </Link>
                                </Nav.Link>

                            )}
                        {location.pathname !== '/shopping' && (
                            <Nav.Link>
                                <Link to="/shopping" className="text-decoration-none text-black navEl p-3">
                                    Shopping
                                </Link>
                            </Nav.Link>
                        )}
                        {location.pathname !== '/carrello' && (
                            <Nav.Link>
                            <Link to="/carrello" className="text-decoration-none text-black navEl p-3">
                                Carrello
                            </Link>
                        </Nav.Link>
                        )}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
}