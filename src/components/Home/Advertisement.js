import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { InfoContext } from '../AuthProvider/AuthContext';
import BookinigModal from './Mobiles/BookinigModal';

const Advertisement = ({ adds }) => {

    const { user } = useContext(InfoContext)




    console.log(adds)
    return (
        <div>


            {


                adds?.isadvertise && !adds.status &&

                <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-2xl shadow-slate-900 dark:bg-gray-800">
                    <div class="flex items-center justify-between px-4 py-2 bg-red-700">
                        <h1 class=" font-bold text-white text-5xl">ADVERTISE</h1>


                    </div>
                    <div class="px-4 py-2">
                        <h1 class="text-3xl font-bold text-gray-800 uppercase dark:text-white">{adds.pname}</h1>
                        <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{adds?.details?.slice(0, 99)}</p>
                    </div>

                    <img className="object-cover w-32 mx-auto h-48 mt-2" src={adds.purl} alt="NIKE AIR" />

                    <div class="flex items-center justify-between px-4 py-2 bg-red-700">
                        <h1 class="text-lg font-bold text-white"><span className='text-black font-extrabold text-4xl'>{adds.askingprice}</span> TAKA Only</h1>


                    </div>
                </div>

            }

         

        </div>
    );
};

export default Advertisement;