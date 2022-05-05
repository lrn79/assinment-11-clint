import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className=''>
                <div className='container-fluid background'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-4 col-12'>  </div>
                        {/* from */}
                        <div className='col-md-4 col-sm-4 col-12'>
                            <Form className='form_container'>

                                <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>


                                <button type='submit' className='btn btn-warning'>Register</button>
                                <p className='mt-2 text-white'>New here ?  ? <Link to='/signup' className='h4 text-warning text-decoration-none' >Register please! </Link></p>
                                {/* <Button type="submit">
                                Submit
                            </Button> */}
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;