import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialMedia from '../Socialmedia/SocialMedia';
import './Signup.css'

const Signup = () => {
    const [userName, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const [
        createUserWithEmailAndPassword,
        user,
        loading,

    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // for read Data
    const handleName = e => {
        setUsername(e.target.value)
        console.log(userName)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)
    }
    const ConfirmPass = e => {
        setConfirmPassword(e.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    // for create user 
    const CreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('password did not matched...')
            return
        }
        createUserWithEmailAndPassword(email, password)
        toast('Email sent');
    }
    return (
        <div>
            <div className='container-fluid background'>
                <div className='row'>
                    <div className='col-md-4 col-sm-4 col-12'>  </div>
                    {/* from */}
                    <div className='col-md-4 col-sm-4 col-12 '>
                        <div className='form_container '>
                            <Form onSubmit={CreateUser}>
                                <Form.Group onChange={handleName} className="mb-3 text-white">
                                    <Form.Label>Your name</Form.Label>
                                    <Form.Control type="name" placeholder="Enter Your name" />

                                </Form.Group>
                                <Form.Group onChange={handleEmail} className="mb-3 text-white" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />

                                </Form.Group>

                                <Form.Group onChange={handlePass} className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group onChange={ConfirmPass} className="mb-3 text-white" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <p className='fw-bolder  text-info mx-5'>{error}</p>

                                <button type='submit' className='btn btn-warning for_hover fw-bolder'>Register</button>


                            </Form>
                            <p className='mt-2 text-white'>New here ?  ? <Link to='/login' className='h4 text-warning text-decoration-none' >Login please! </Link></p>
                            <SocialMedia></SocialMedia>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;