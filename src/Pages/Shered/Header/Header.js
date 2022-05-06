import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Header.css'
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const SignOut = () => {
        signOut(auth)
    }
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
                            {/* After log in User */}
                            {
                                user && <>
                                    <Nav.Link className='nav-text h5 fw-bolder' as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link className='nav-text h5 fw-bolder' as={Link} to="manageitem">Manage Item</Nav.Link>
                                    <Nav.Link className='nav-text h5 fw-bolder' as={Link} to="myitem">My Item</Nav.Link>
                                </>
                            }
                            {/* log in sign out */}
                            {
                                user ?
                                    <Nav.Link className='h5 fw-bolder nav-text' onClick={SignOut}>sign out</Nav.Link>
                                    :
                                    <Nav.Link className='h5 fw-bolder nav-text' as={Link} to="login">Log in</Nav.Link>
                            }


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;