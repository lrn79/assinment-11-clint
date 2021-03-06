import React from 'react';
import toast from 'react-hot-toast';
import './AddItem.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth'

const AddItem = () => {
    const [user] = useAuthState(auth)
    const handleAddUser = e => {

        e.preventDefault();
        const supplierName = e.target.supplierName.value;
        const description = e.target.description.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const email = user?.email;


        const item = { supplierName, description, img, price, quantity, email };

        // send data to the server
        fetch('https://salty-everglades-57172.herokuapp.com/additem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast('Items added successfully!!!');
                e.target.reset();
            })
    }
    return (
        <div className='background '>
            <h1 className='text-center mb-5 text-warning'>add a new item</h1>
            <div className='mt-5'>
                <form onSubmit={handleAddUser} className="w-50 mx-auto mt-5 Add_from ">
                    <div className="form-group">
                        <label className='h5 text-white' for="exampleInputEmail1">supplierName</label>
                        <input type="text" className="form-control rounded" id="exampleInputEmail1" name='supplierName' placeholder="Enter supplierName" />
                    </div>
                    <div className="form-group">
                        <label className='h5 text-white' for="exampleInputEmail1">description</label>
                        <textarea type="text" className="form-control rounded" id="exampleInputEmail1" name='description' placeholder="Enter description" />
                    </div>
                    <div className="form-group">
                        <label className='h5 text-white' for="exampleInputEmail1">Image</label>
                        <input type="text" className="form-control rounded" id="exampleInputEmail1" name='img' placeholder="Enter image" />
                    </div>
                    <div className="form-group">
                        <label className='h5 text-white' for="exampleInputEmail1">price</label>
                        <input type="number" className="form-control rounded" id="exampleInputEmail1" name='price' placeholder="Enter price" />
                    </div>
                    <div className="form-group">
                        <label className='h5 text-white' for="exampleInputEmail1">quantity</label>
                        <input type="number" className="form-control rounded" id="exampleInputEmail1" name='quantity' placeholder="Enter quantity" />
                    </div>

                    <button type="submit" className="btn btn-warning w-25 d-block mt-5 mx-auto btn_style">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;
