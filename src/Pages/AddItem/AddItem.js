import React from 'react';
import toast from 'react-hot-toast';
import './AddItem.css'

const AddItem = () => {
    const handleAddUser = e => {
        e.preventDefault();
        const supplierName = e.target.supplierName.value;
        const description = e.target.description.value;
        const img = e.target.img.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        const item = { supplierName, description, img, price, quantity };

        // send data to the server
        fetch('http://localhost:5000/additem', {
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


{/* <form className='mx-auto w-75 borderr' onSubmit={handleAddUser}>
<input className='w-50 mt-3 mb-3 form-control ' type="text" name="supplierName" placeholder='Add SupplierName' required />
<br />
<textarea className='w-50 mt-3 mb-3 ' name="description" placeholder='Add description' cols="30" rows="5"></textarea>
<br />
<input className='w-50 mt-3 mb-3 ' type="text" name="img" placeholder='Add img' required />
<br />
<input className='w-50 mt-3 mb-3 ' type="text" name="price" placeholder='Add price' required />
<br />
<input className='w-50 mt-3 mb-3 ' type="text" name="quantity" placeholder='Add quantity' required />
<br />
<input className='btn_style mt-3 mb-3 ' type="submit" value="Add User" />
</form> */}