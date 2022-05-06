import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../Images/google_1.png'
import { useLocation, useNavigate } from 'react-router-dom';

const SocialMedia = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div>
                <h3 className='text-center mt-2 mb-3 fw-lighter text-white'>------Social login-----</h3>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-warning for_hover fw-bolder  '>
                    <img style={{ width: '27px ' }} className="" src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialMedia;