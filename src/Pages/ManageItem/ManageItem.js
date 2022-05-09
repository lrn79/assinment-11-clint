import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import ManageAllItem from './ManageAllItem';

const ManageItem = () => {

    const { items, setItems, isReload, setIsReload } = useItems("https://salty-everglades-57172.herokuapp.com/allitem");
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
                            <ManageAllItem key={item._id} item={item} setItems={setItems}
                                isReload={isReload}
                                setIsReload={setIsReload}
                                items={items}

                            ></ManageAllItem>
                        ))
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ManageItem;