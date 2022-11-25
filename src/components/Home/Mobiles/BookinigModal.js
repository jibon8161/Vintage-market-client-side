import React, { useContext } from 'react';
import { InfoContext } from '../../AuthProvider/AuthContext';

const BookinigModal = ({ mobile }) => {

    const { user } = useContext(InfoContext)

    const handleBooking = event => {

        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const productname = form.itemn.value;
        const productprice = form.askingprice.value;
        const phonenumber = form.phonenumber.value;
        const location = form.location.value;

        console.log(name, email, productname, productprice, phonenumber, location)


    }

    return (
        <div>
            <input type="checkbox" id="mobilebooking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="mobilebooking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} readOnly placeholder="Full Name" name='name' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" defaultValue={user?.email} readOnly placeholder="Email" name='email' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product name</span>
                            </label>
                            <input type="text" defaultValue={mobile?.pname} readOnly placeholder="Product name" name='itemn' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product price</span>
                            </label>
                            <input type="text" defaultValue={mobile?.askingprice} readOnly placeholder="Product price" name='askingprice' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" placeholder="Phone number" name='phonenumber' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" placeholder="Your location" name='location' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-purple-200" required />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>
        </div>
    );
};

export default BookinigModal;