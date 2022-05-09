import axios from 'axios';
import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './manageAllItem.css'


const ManageAllItem = ({ item, items, setItems, isReload, setIsReload }) => {
    console.log(items)

    const navigate = useNavigate()
    const { _id, price, img, quantity, supplierName, description } = item;
    const navigateToUpdateStoke = id => {
        navigate(`/stokeupdate/${id}`);
    }

    // For delete A card
    const handleDelete = async (id) => {
        // console.log(id)
        const confirmPass = window.confirm('Are you sure you want to delete it?');

        if (confirmPass) {
            const url = `https://salty-everglades-57172.herokuapp.com/deleteQuantity/${id}`;
            await axios.delete(url)

            const remaining = items.filter(item => item._id !== id)
            setItems(remaining)
            setIsReload(!isReload)

        }

    };

    return (
        <>
            <Col lg={4} md={6} sm={12}>
                <div>
                    <div className='card-cover '>
                        <button className='delete_btn' onClick={() => handleDelete(_id)} >Delete it ‼</button>
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

                    <div className=''>
                        <span>
                            <button onClick={() => navigateToUpdateStoke(_id)} className='btn_style card_btn d-block'>Stoke Update</button></span>

                    </div>
                </div>
            </Col>
        </>
    );
};

export default ManageAllItem;