import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import useItemStoke from '../../Hooks/useItemStoke';
import './StokeUpdate.css'

const StokeUpdate = () => {
    const { id } = useParams();
    console.log(id)
    const [item, isloded, setIsloded] = useItemStoke(id);
    console.log(item)
    const { _id, price, img, quantity, supplierName, description } = item;

    // For Decrease Quantity
    const handleQuantity = async (id) => {
        const NewQuantity = quantity - 1;
        const url = `https://salty-everglades-57172.herokuapp.com/updatequantity/${id}`;
        console.log(url);
        await axios.put(url, { NewQuantity });
        setIsloded(!isloded);
    };
    //For add quantity
    const hadleFormQuantity = async (event) => {
        event.preventDefault();
        const textQuantity = parseInt(event.target.stokeQuantity.value);
        console.log(textQuantity)
        const NewQuantity = quantity + textQuantity;
        const url = `https://salty-everglades-57172.herokuapp.com/updatequantity/${id}`;
        await axios.put(url, { NewQuantity });
        setIsloded(!isloded);
        event.target.reset();

    };

    return (
        <>
            <Container>
                <Row className='SingleCard mt-5 mb-3'>
                    <Col lg={6} md={6} sm={12}>
                        <img className='w-50 mt-5 mx-5' src={img} alt="" />
                    </Col>
                    <Col lg={6} md={6} sm={12} className='mt-5'>
                        <h3 className='text-center fw-bold mb-5'><span className='h1 text-warning'>M</span>ain Description</h3>
                        <p className='h5'><span className='h3 fw-bolder'>description :</span> {description}</p>
                        <p className='h5'><span className='h3 fw-bolder'>supplierName :</span> {supplierName}</p>
                        <p className='h5 mt-2'><span className='h3 fw-bolder'>price :</span> {price}</p>
                        <p className='h5 mt-2'><span className='h3 fw-bolder'>quantity :</span> {quantity}</p>
                        <br />
                        <button onClick={() => handleQuantity(_id)} className='btn_style '>Delivered</button>
                        <br />
                        <br />
                        <form onSubmit={hadleFormQuantity}>
                            <input className='Quantiti_feild p-2 ' name='stokeQuantity' type="number" id="" />
                            <button type='submit' className='btn_style mx-2'>Add quantity</button>
                        </form>

                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StokeUpdate;