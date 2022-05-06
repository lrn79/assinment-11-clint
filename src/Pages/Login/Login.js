import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { Form, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialMedia from '../Socialmedia/SocialMedia';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // from hooks
    const [signInWithEmailAndPassword, user, loading,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    // handle email and pass
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePass = e => {
        setPassword(e.target.value)

    }

    if (user) {
        navigate(from, { replace: true })
    }
    if (loading) {
        return <Loading></Loading>
    }

    // For Log in User 

    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    const handleResetPassword = async (e) => {
        await sendPasswordResetEmail(email);
        toast('Email sent');

    }
    return (
        <div>
            <div className=''>
                <div className='container-fluid background'>
                    <div className='row'>
                        <div className='col-md-4 col-sm-4 col-12'>  </div>
                        {/* from */}
                        <div className='col-md-4 col-sm-4 col-12'>
                            <div className='form_container'>
                                <Form className='mb-5' onSubmit={handleLogin}>
                                    <Form.Group onChange={handleEmail} className="mb-3 text-white" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group onChange={handlePass} className="mb-3 text-white" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <button type='submit' className='mt-2 btn btn-warning fw-bolder  for_hover'>Log in</button>
                                </Form>
                                <p className='mt-2 mb-5 text-white'>New here ?  ? <Link to='/signup' className='h4 text-warning text-decoration-none' >Register please! </Link></p>
                                <p className='mt-2  text-white'>Forgot password? ?
                                    <button className='btn btn_font text-warning text-decoration-none h1 fw-bolder' onClick={handleResetPassword} >
                                        Reset password
                                    </button></p>
                                <SocialMedia></SocialMedia>
                                <ToastContainer></ToastContainer>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;