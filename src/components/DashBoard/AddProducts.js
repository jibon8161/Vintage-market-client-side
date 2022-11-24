import React, { useContext } from 'react';
import { InfoContext } from '../AuthProvider/AuthContext';

const AddProducts = () => {

    const { user } = useContext(InfoContext)
    console.log(user)
    const handleSubmit = event => {

        event.preventDefault()
        const form = event.target

        const name = form.name.value
        const url = form.url.value
        const description = form.description.value
        const category = form.category.value
        const condition = form.condition.value
        const location = form.location.value
        const mobile = form.mobile.value
        const askingprice = form.askingprice.value
        const orginalprice = form.orginalprice.value
        const purchaseyear = form.purchaseyear.value
        const usagetime = form.usagetime.value
        const date = new Date()
        const sellerName = user?.displayName
        console.log(name, url, description, location,
            mobile, askingprice, orginalprice, purchaseyear, usagetime, condition, category, date, sellerName)






    }


    return (
        <div>
            <div className=''>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">


                        </div>
                        <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
                            <form onSubmit={handleSubmit} className="card-body lg:w-[500px] mx-auto">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Product name" name='name' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo URL" name='url' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" name='description' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Location</span>
                                    </label>
                                    <input type="text" placeholder="location" name='location' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Mobile Number</span>
                                    </label>
                                    <input type="number" placeholder="Mobile number" name='mobile' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your asking price</span>
                                    </label>
                                    <input type="number" placeholder="asking price" name='askingprice' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Orginal price</span>
                                    </label>
                                    <input type="number" placeholder="orginal price" name='orginalprice' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">when you buy this product?</span>
                                    </label>
                                    <input type="date" placeholder="purchase year" name='purchaseyear' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">how many years have you using this product?</span>
                                    </label>
                                    <input type="text" placeholder="purchase year" name='usagetime' className="input input-bordered shadow-inner  shadow-zinc-600 hover:bg-orange-200" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Condition type</span>
                                    </label>
                                    <select name='condition' className="select select-bordered">

                                        <option>excellent</option>
                                        <option value=''>good</option>
                                        <option>fair</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select a category</span>
                                    </label>
                                    <select name='category' className="select select-bordered">

                                        <option>smartphones</option>
                                        <option value=''>folding phones</option>
                                        <option>Basic phones</option>
                                    </select>
                                </div>



                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Book Now</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default AddProducts;