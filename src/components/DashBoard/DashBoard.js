import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { InfoContext } from '../AuthProvider/AuthContext';

const DashBoard = () => {

    const { user, logOut } = useContext(InfoContext)

    const { data: mybooking = [], isLoading, refetch } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch(`http://localhost:5000/bookings?email=${user.email}`, {



            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`

            }






        })
            .then(res => {

                if (res.status === 401 || res.status === 403) {

                    logOut()


                }

                return res.json()

            })



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
                            <th className="p-3">Booking Date</th>
                            <th className="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            mybooking.map((booking, index) =>
                                <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                    <th>{index + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={booking.img} alt='' />
                                        </div>
                                    </div></td>
                                    <td>{booking.productname}</td>
                                    <td>{booking.productprice} taka</td>
                                    <td>{booking?.bookingdate}</td>
                                    <td>{

                                        booking.productprice && !booking?.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-success btn-sm'>PAY</button></Link>
                                    }
                                        {

                                            booking.productprice && booking?.paid && <span className='text-primary'>PAID</span>


                                        }



                                    </td>


                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashBoard;