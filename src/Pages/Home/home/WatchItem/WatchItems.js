import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useItems from '../../../../Hooks/useItems';
import WatchItemCard from '../../../WatchItemCard/WatchItemCard';
import './WatchItems.css'

const WatchItems = () => {
    const { items } = useItems("https://salty-everglades-57172.herokuapp.com/allitem");
    const sliceItems = items.slice(0, 6)
    return (
        <>
            <Container>
                <div>
                    <h1 className='text-center mt-5  mb-3 items_title'>Watch Items</h1>
                </div>
                <Row>
                    {
                        sliceItems.map((item) => (
                            <WatchItemCard key={item._id} item={item}></WatchItemCard>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default WatchItems;