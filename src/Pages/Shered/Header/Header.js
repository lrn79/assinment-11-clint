import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" >
                <Container>
                    <Navbar.Brand as={Link} to="/" ><span className='h1'>Wat</span><span className='h3 text-warning'>ches</span> <span className='h3 text-warning '>pla</span><span className='h3'>net</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        {/* this is real menubar */}
                        <Nav>


                            <Nav.Link className='  nav-text h5 fw-bolder' as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link className='h5 fw-bolder nav-text' as={Link} to="login">Log in</Nav.Link>

                            <Nav.Link className='h5 fw-bolder nav-text' as={Link} to="signup">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;