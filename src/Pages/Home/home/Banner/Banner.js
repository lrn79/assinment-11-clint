import React from 'react';
import './Banner.css'
import banner from '../../../../Images/banner.jpg'

const Banner = () => {
    return (
        <div className=''>
            <div className='mt-5 banner_flex'>
                <div className='flex_1'>
                    <h1 className=' mx-5 mb-5 fw-bolder'>this is watch warehouse</h1>
                    <h3 className='mx-5'>Customer satisfaction Should be our first priority...We Work with our confidence and with loyalty</h3>
                    <button className='mx-5 mt-2  btn_style'>SEE ALL PRODUCTS</button>
                </div>
                <div className='flex_2'>
                    <img className='w-75 mx-5' src={banner} alt="" />
                </div>
            </div>

            <div className='curv'>
            </div>
        </div>
    );
};

export default Banner;