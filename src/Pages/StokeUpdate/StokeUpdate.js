import React from 'react';
import { useParams } from 'react-router-dom';
import useItemStoke from '../../Hooks/useItemStoke';

const StokeUpdate = () => {
    const { id } = useParams();
    console.log(id)
    const [item] = useItemStoke(id);
    console.log(item)
    const { _id, price, img, quantity, supplierName, description } = item;

    return (
        <div>
            <h1>stoke update {price} </h1>
        </div>
    );
};

export default StokeUpdate;