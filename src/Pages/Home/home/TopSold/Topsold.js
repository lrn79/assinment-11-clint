import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import './Topsold.css'

const Topsold = () => {
    return (
        <div>
            <div >
                <p className='mt-5 text-center h1 mb-3 progress_title '>Top Sold Products</p>
            </div>
            <div className='container'>
                <h4>Casio</h4>
                <ProgressBar variant='warning' animated now={90} label={`${90}%`} />
                <br />
                <h4>Heylo</h4>
                <ProgressBar animated variant='success' now={74} label={`${74}%`} />
                <br />
                <h4>Tissot</h4>
                <ProgressBar animated variant='secondary' now={50} label={`${50}%`} />
                <br />
                <h4>Skmei</h4>
                <ProgressBar animated now={30} label={`${30}%`} />
                <br />
                <h4>Rolex</h4>
                <ProgressBar animated variant='danger' now={25} label={`${25}%`} />
                <br />
            </div>
        </div >

    );
};

export default Topsold;