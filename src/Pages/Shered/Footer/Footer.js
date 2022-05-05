import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="mt-5 footer">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-md-6 ">
                        <h3 className="panel-title">Our Goal!!</h3>
                        <div className="mt-2 h5">
                            <p>"Our duty is always satisfy Our clients with our products and we always ensure that Our quality have to World class level
                                We did our job with passion and hard work" <br /> <br /> <span className='fw-bold'>🖌Lutfor Rahman Nayeem</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 footer-gap ">
                        <h3 className="panel-title ">
                            Contact Info
                        </h3>
                        <div className="">
                            <p className='fs-5'>We are available from "10am to 8pm"  You can find Ours With that Way-</p>
                            <ul className='fs-5'>
                                <li>📞0156666666666</li>
                                <li>✉ nayeem126670@gmail.com</li>
                                <li>🌏 Dhaka, tongi,Gazipur</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-4 mb-1">
                        <p className="">© {year} Watches. All rights reserved By Lrn79</p>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Footer;