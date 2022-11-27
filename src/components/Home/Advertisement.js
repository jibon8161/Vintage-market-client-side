import React from 'react';
import { Link } from 'react-router-dom';

const Advertisement = ({ adds }) => {
    console.log(adds)
    return (
        <div>


            {


                adds?.isadvertise && !adds.status &&

                <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div class="px-4 py-2">
                        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{adds.pname}</h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{adds?.details?.slice(0, 99)}</p>
                    </div>

                    <img className="object-cover w-full h-48 mt-2" src={adds.purl} alt="NIKE AIR" />

                    <div class="flex items-center justify-between px-4 py-2 bg-red-700">
                        <h1 class="text-lg font-bold text-white">{adds.askingprice} Only</h1>
                        <Link to={`/dashboard/payment/${adds._id}`}> <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button></Link>
                    </div>
                </div>

            }



        </div>
    );
};

export default Advertisement;