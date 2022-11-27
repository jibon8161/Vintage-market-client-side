import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ShowReported = ({ report, index }) => {


    const delbtn = (id, refetch) => {

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


    return (
        <div>
            {

                report.reported &&

                <div className="container p-5 mx-auto sm:p-4 dark:text-gray-100 mb-8 ">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Reported items</h2>
                    <div className="overflow-x-auto mb-5">
                        <table className="min-w-full text-xs">

                            <thead className="dark:bg-gray-700">
                                <tr className="text-center">
                                    <th className="p-3"></th>
                                    <th className="p-3">Seller Name</th>
                                    <th className="p-3">Product Name</th>
                                    <th className="p-3">Condition</th>
                                    <th className="p-3">Price</th>
                                    <th className="p-3">Posting Date</th>
                                    <th className="p-3">Action</th>

                                </tr>
                            </thead>
                            <tbody>



                                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 mt-5 font-semibold">
                                    <th>{index + 1}</th>
                                    <td> {report?.sellerName}</td>
                                    <td>{report?.pname}</td>
                                    <td>{report?.condition}</td>
                                    <td>{report?.askingprice}</td>
                                    <td>{report?.date?.slice(0, 27)}</td>

                                    <td>

                                        <button onClick={() => delbtn(report._id)} className='btn btn-sm btn-warning'>Delete</button>

                                    </td>


                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>



            }
        </div>
    );
};

export default ShowReported;