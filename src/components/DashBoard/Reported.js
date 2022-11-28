import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReported from './ShowReported';

const Reported = () => {




    const { data: reported = [], isLoading, refetch } = useQuery({


        queryKey: ['allproducts'],
        queryFn: () => fetch(`http://localhost:5000/allproducts`, {

            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`

            }



        })
            .then(res => res.json())



    })

    if (isLoading) {


        return <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div>


    }


    console.log(reported)
    return (
        <div>
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Reported items</h2>

            {

                reported?.map((report, index) => <ShowReported key={report._id} index={index} report={report} refetch={refetch}></ShowReported>)


            }
        </div>
    );
};

export default Reported;