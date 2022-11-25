import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { InfoContext } from '../AuthProvider/AuthContext';

const DashBoard = () => {

    const { user } = useContext(InfoContext)

    const { data: mybooking = [], isLoading, refetch } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user.email}`)
            .then(res => res.json())



    })

    console.log(mybooking)

    refetch()


    return (
        <div className="container p-5 mx-auto sm:p-4 dark:text-gray-100 ">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">My bookings</h2>
            <div className="overflow-x-auto mb-5">
                <table className="min-w-full text-xs">

                    <thead className="dark:bg-gray-700">
                        <tr className="text-center">
                            <th className="p-3">Serial #</th>
                            <th className="p-3">Image</th>
                            <th className="p-3">title</th>
                            <th className="p-3">Amount</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            mybooking.map((booking, index) =>
                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                    <th>{index + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={booking.img} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{booking.productname}</td>
                                    <td>{booking.productprice} taka</td>
                                    <td>{

                                        booking.productprice && booking?.paid ? <button className='btn btn-success btn-sm'>PAID</button> : <button className='btn btn-warning btn-sm' >PAY</button>

                                    }</td>

                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashBoard;