import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { TiTick } from "react-icons/ti";
const Allsellers = () => {




    const { data: sellers = [], isLoading, refetch } = useQuery({


        queryKey: ['email', 'seller'],
        queryFn: () => fetch('https://vintage-resale-market-server.vercel.app/sellers?role=seller')
            .then(res => res.json())



    })

    const delbtn = id => {



        console.log(id)

        const proceed = window.confirm('are u sure that you want to delete this seller?')

        if (proceed) {


            fetch(`https://vintage-resale-market-server.vercel.app/deluser/${id}`, {

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



    const verify = id => {


        console.log(id)
        fetch(`https://vintage-resale-market-server.vercel.app/verify/${id}`, {


            method: "PUT",



        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {

                    toast.success('seller verified')
                    refetch()

                }

            })


    }





    return (
        <div>
            {

                sellers && <div className="container p-5 mx-auto sm:p-4 dark:text-gray-100 mb-8 ">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">All Selleres</h2>
                    <div className="overflow-x-auto mb-5">
                        <table className="min-w-full text-xs">

                            <thead className="dark:bg-gray-700">
                                <tr className="text-center">
                                    <th className="p-3">Serial</th>
                                    <th className="p-3">Name</th>
                                    <th className="p-3">Email</th>
                                    <th className="p-3">Role</th>
                                    <th className="p-3">Verify</th>
                                    <th className="p-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    sellers?.map((seller, index) =>
                                        <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                            <th>{index + 1}</th>
                                            <td> {seller.name}</td>
                                            <td>{seller.email}</td>
                                            <td>{seller.role} </td>
                                            <td>


                                                {

                                                    seller.status === 'verified' ? <p className='text-blue-700 font-bold'><TiTick className='text-4xl '></TiTick></p> : <button onClick={() => verify(seller._id)} className='btn btn-sm btn-success'>unverified</button>

                                                }
                                            </td>
                                            <td>

                                                <button onClick={() => delbtn(seller._id)} className='btn btn-sm btn-warning'>Delete</button>

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

export default Allsellers;