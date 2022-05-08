import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import ManageAllItem from './ManageAllItem';

const ManageItem = () => {

    const [items] = useItems();
    const navigate = useNavigate()

    return (
        <div>
            <Container>
                <div>
                    <h1 className='text-center mt-5 mb-2  items_title'>Manage Items</h1>
                    <button onClick={() => navigate('/additem')} className='btn_style border border-dark  mb-5 d-block mx-auto'>Add Item +</button>
                </div>
                <Row>
                    {
                        items.map((item) => (
                            <ManageAllItem key={item._id} item={item}></ManageAllItem>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageItem;