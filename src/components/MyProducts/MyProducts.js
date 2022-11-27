import { useQuery } from '@tanstack/react-query';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useContext, useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { InfoContext } from '../AuthProvider/AuthContext';

const MyProducts = () => {

    const { user } = useContext(InfoContext)



    const { data: myproducts = [], isLoading, refetch } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch(`http://localhost:5000/myproduct?email=${user.email}`)
            .then(res => res.json())



    })


    const deleteBtn = id => {



        console.log(id)
        const proceed = window.confirm('are u sure that you want to delete this product?')

        if (proceed) {


            fetch(`http://localhost:5000/delproduct/${id}`, {

                method: 'DELETE',

            })

                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    if (data.deletedCount > 0) {

                        toast.error('deleted successfully')
                        refetch()

                    }



                })
        }



    }


    const advertise = product => {


        console.log(product)

        fetch(`http://localhost:5000/advertiseitem/${product}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)

                const addsdata = {


                    pid: data._id,
                    askingprice: data.askingprice,
                    category: data.category,
                    condition: data.condition,
                    date: data.date,
                    details: data.details,
                    location: data.location,
                    orginalprice: data.orginalprice,
                    pname: data.pname,
                    purl: data.purl,
                    purchaseyear: data.purchaseyear,
                    sellerName: data.sellerName,
                    sellerstatus: data.sellerstatus,
                    usagetime: data.usagetime,






                }

                fetch('http://localhost:5000/advertise', {


                    method: "POST",
                    headers: {

                        'content-type': 'application/json'

                    },
                    body: JSON.stringify(addsdata)



                })

                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        toast.success('Advertise successfully done')

                    })
                    .catch(err => console.log(err))



            })








    }






    return (
        <div>

            {

                myproducts && <div className="container p-5 mx-auto sm:p-4 dark:text-gray-100 ">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">My Products</h2>
                    <h1>Total {myproducts.length}</h1>
                    <div className="overflow-x-auto mb-5">
                        <table className="min-w-full text-xs">

                            <thead className="dark:bg-gray-700">
                                <tr className="text-center">
                                    <th className="p-3">Serial</th>
                                    <th className="p-3">Product name</th>
                                    <th className="p-3">Category</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Status</th>
                                    <th className="p-3">Action</th>
                                    <th className="p-3">Advertise</th>

                                </tr>
                            </thead>
                            <tbody>
                                {

                                    myproducts?.map((myproduct, index) =>
                                        <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                            <th>{index + 1}</th>
                                            <td> {myproduct.pname}</td>
                                            <td>{myproduct.category}</td>
                                            <td>{myproduct.askingprice} </td>
                                            <td>{

                                                myproduct.status ? 'sold' : 'available '



                                            }</td>
                                            <td><button className='btn btn-sm btn-warning' onClick={() => deleteBtn(myproduct._id)}>Delete</button></td>
                                            <td>

                                                {

                                                    myproduct.status ? "Already Sold" : <button onClick={() => advertise(myproduct._id)} className='btn btn-sm btn-success'>Advertise</button>

                                                }

                                            </td>


                                        </tr>)

                                }

                            </tbody>
                        </table>
                    </div>
                </div>

            }
        </div>
    );
};

export default MyProducts;