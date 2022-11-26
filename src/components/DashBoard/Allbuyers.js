import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Allbuyers = () => {


    // const [buyers, setBuyers] = useState('')
    // useEffect(() => {


    //     axios.get('http://localhost:5000/sellers?role=user')
    //         .then(data => setBuyers(data.data))




    // }, [])



    const { data: buyers = [], isLoading, refetch } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch('http://localhost:5000/sellers?role=user')
            .then(res => res.json())



    })


    const delbtn = id => {



        console.log(id)

        const proceed = window.confirm('are u sure that you want to delete your review?')

        if (proceed) {


            fetch(`http://localhost:5000/deluser/${id}`, {

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




    console.log(buyers?.data)

    return (
        <div>
            <div>
                {

                    buyers && <div className="container p-5 mx-auto sm:p-4 dark:text-gray-100 ">
                        <h2 className="mb-4 text-2xl font-semibold leading-tight">All Buyers</h2>
                        <div className="overflow-x-auto mb-5">
                            <table className="min-w-full text-xs">

                                <thead className="dark:bg-gray-700">
                                    <tr className="text-center">
                                        <th className="p-3">Serial</th>
                                        <th className="p-3">Name</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Role</th>
                                        <th className="p-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {

                                        buyers?.map((buyer, index) =>
                                            <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                                <th>{index + 1}</th>
                                                <td> {buyer.name}</td>
                                                <td>{buyer.email}</td>
                                                <td>{buyer.role} </td>
                                                <td>

                                                    <button onClick={() => delbtn(buyer._id)} className='btn btn-sm btn-warning'>Delete</button>

                                                </td>


                                            </tr>)

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>

                }

            </div>
        </div>
    );
};

export default Allbuyers;