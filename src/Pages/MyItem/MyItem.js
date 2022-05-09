import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useItems from '../../Hooks/useItems';
import ShowMyItem from './ShowMyItem/ShowMyItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const { items } = useItems(`http://localhost:5000/myitems?email=${user?.email}`);
    console.log(items)
    return (
        <Container>
            <div>
                <h1 className='text-center mt-3 mb-5 heading_title'>this is my item</h1>

                <Row>
                    {
                        items.map((item) => (
                            <ShowMyItem item={item}></ShowMyItem>
                        ))
                    }
                </Row>
            </div>
        </Container>
    );
};

export default MyItem;