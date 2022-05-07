import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './WatchItemCard.css'

const WatchItemCard = ({ item }) => {
    const navigate = useNavigate()
    const { _id, price, img, quantity, supplierName, description } = item;
    const navigateToUpdateStoke = id => {
        navigate(`/stokeupdate/${id}`);
    }
    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div>
                    <div className='card-cover '>
                        <div>
                            <img className=' d-block mx-auto img_height' src={img} alt="" />
                        </div>
                        <div>
                            <p className='mt-2'><span className='h5 fw-bolder'>Description</span>:{description}</p>
                            <p><span className='h5 fw-bolder'>supplierName</span>: {supplierName}</p>
                            <p><span className='h5 fw-bolder'>quantity</span>: {quantity}</p>
                            <p><span className='h5 fw-bolder'>price</span>: {price}</p>
                        </div>


                    </div>
                    <button onClick={() => navigateToUpdateStoke(_id)} className='btn_style card_btn d-block  mb-5'>Stoke Update</button>
                </div>
            </Col>
        </>
    );
};

export default WatchItemCard;

//   "supplierName": "moris jontion",
