import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InfoContext } from '../../AuthProvider/AuthContext';
import AllMobiles from './AllMobiles';

const Mobiles = ({ category }) => {
    const navigate = useNavigate()

    // const { mobiles, setMobiles } = useContext(InfoContext)


    const mobilesbtn = () => {



        navigate(`/allmobiles/${category.category}`)





    }
    // console.log(mobiles)


    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50  shadow-slate-900 ">
                <img src={category.img} alt="" className="border-2 border-indigo-600 object-cover object-center w-full rounded-md h-72 dark:bg-gray-500 shadow-2xl shadow-purple-400 " />
                <div className="mt-6 mb-2">

                    <h2 className="text-xl font-semibold tracking-wide">{category.category}</h2>
                </div>
                <button onClick={() => mobilesbtn(category)} className="btn btn-outline btn-primary">Click here</button>
            </div>




        </div>
    );
};

export default Mobiles;