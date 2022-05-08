import React from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './manageAllItem.css'


const ManageAllItem = ({ item }) => {
    const [deleteItem, setDeleteItem] = useState([])
    const navigate = useNavigate()
    const { _id, price, img, quantity, supplierName, description } = item;
    const navigateToUpdateStoke = id => {
        navigate(`/stokeupdate/${id}`);
    }

    // For delete A card
    const handleDelete = (id) => {
        console.log(id)
        const confirmPass = window.confirm('Are you sure you want to delete it?');

        if (confirmPass) {
            fetch(`http://localhost:5000/deleteQuantity/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    // if (data.deletedCount > 0) {
                    //     console.log('deleted');
                    //     const remaining = deleteItem.filter(user => user._id !== id);
                    //     setDeleteItem(remaining);
                    // }
                });
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