import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { InfoContext } from '../AuthProvider/AuthContext';

const MyProducts = () => {

    const { user } = useContext(InfoContext)

    const { data: myproducts = [], isLoading } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch(`http://localhost:5000/myproduct?email=${user.email}`)
            .then(res => res.json())



    })

    console.log(myproducts)
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

                                </tr>
                            </thead>
                            <tbody>
                                {

                                    myproducts?.map((myproduct, index) =>
                                        <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                            <th>{index + 1}</th>
                                            <td> {myproduct.pname}</td>
                                            <td>{myproduct.category}</td>
                                            <td>{myproduct.askingprice} </td>
                                            <td>sold</td>
                                            <td>

                                                <button className='btn btn-sm btn-warning'>Advertise</button>

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