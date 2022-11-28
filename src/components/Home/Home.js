import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';

import Mobiles from './Mobiles/Mobiles';

import { FaDove, FaGrinHearts, FaRunning, FaHeart } from "react-icons/fa";
import Steps from './Steps';
import { InfoContext } from '../AuthProvider/AuthContext';
import axios from 'axios';
import Advertisement from './Advertisement';


const Home = () => {


    const [advertiseproduct, setAdvertiseProduct] = useState()

    const { data: categorynames = [], isLoading } = useQuery({


        queryKey: ['categoryname'],
        queryFn: () => fetch('http://localhost:5000/categoryname', {


            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`

            }



        })
            .then(res => res.json())



    })




    useEffect(() => {


        axios.get(`http://localhost:5000/allproducts`, {


            headers: {

                authorization: `Bearer ${localStorage.getItem('token')}`

            }



        })
            .then(data => setAdvertiseProduct(data.data))




    }, [])




    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl bg-black text-white mt-2 font-semibold uppercase shadow-2xl shadow-slate-900 '><span className='text-purple-400'>Wellcome</span> to Vintage resale market</h1>
            <p className='font-medium mb-5 uppercase underline text-2xl'><span className='text-purple-400'>May all </span> your heart desires be granted</p>
            <div>

                <div className="carousel w-full h-[500px] shadow-2xl shadow-slate-900">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg?w=2000" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://bgr.com/wp-content/uploads/2019/11/bgr-iphone-11-pro-1.jpg?quality=82&strip=all" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://cdn.mos.cms.futurecdn.net/qUXZQLVrp8Y6GkqeiTQ3GE-1200-80.jpg" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://i.pcmag.com/imagery/reviews/01pr6hmgqz7A5wX5hSQWqRs-1..v1632764534.jpg" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>


            </div>




            {/* <h1 className='text-center mt-8 text-5xl font-bold uppercase underline mb-5 mx-auto'><span className='text-purple-500'> Our</span> Hot Products</h1> */}


            <div className='lg:ml-5 ml-4 mt-8 grid lg:grid-cols-3 container mx-auto  md:grid-cols-2'>
                {

                    advertiseproduct?.map(adds => <Advertisement key={adds._id} adds={adds}></Advertisement>)


                }

            </div>

            <h1 className='text-center mt-8 text-5xl font-bold uppercase underline'><span className='text-purple-500'>Select </span>Your Category</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 container mx-auto mt-8 lg:ml-8'>

                {


                    categorynames?.map(category => <Mobiles key={category._id} category={category}></Mobiles>)


                }

            </div>


            <div className='mt-8'>

                <Steps></Steps>
            </div>


            <div>


                <div className='lg:mb-24 mt-8 mb-32 '>


                    <section className="p-6 my-6 lg:mb-0  ">
                        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4 ">
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-indigo-600 bg-gray-900 shadow-2xl shadow-slate-900">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                    <FaDove className='text-5xl text-green-600'></FaDove>
                                </div>
                                <div className="flex flex-col justify-center align-middle shadow-2xl shadow-slate-900">
                                    <p className="text-3xl font-semibold leading-none stat-value text-primary">100%</p>
                                    <p className="capitalize text-white">User Satisfaction</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  border border-indigo-600 bg-gray-900 shadow-2xl shadow-slate-900">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                    <FaGrinHearts className='text-5xl text-red-500'></FaGrinHearts>
                                </div>
                                <div className="flex flex-col justify-center align-middle shadow-2xl shadow-slate-900">
                                    <p className="text-3xl font-semibold leading-none stat-figure text-secondary">60%</p>
                                    <p className="capitalize text-white">Repeat clients</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border border-indigo-600 bg-gray-900 shadow-2xl shadow-slate-900">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                    <FaRunning className='text-5xl text-violet-600'></FaRunning>
                                </div>
                                <div className="flex flex-col justify-center align-middle shadow-2xl shadow-slate-900 ">
                                    <p className="text-3xl font-semibold leading-none stat-figure text-warning backdrop:">9000+</p>
                                    <p className="capitalize text-white ">Product sold</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6  border-indigo-600 bg-gray-900 shadow-2xl shadow-slate-900">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                    <FaHeart className='text-5xl text-yellow-400'></FaHeart>
                                </div>
                                <div className="flex flex-col justify-center align-middle shadow-2xl shadow-slate-900">
                                    <p className="text-3xl font-semibold leading-none stat-figure text-accent">2M</p>
                                    <p className="capitalize text-white">Followers</p>
                                </div>
                            </div>
                        </div>
                    </section>



                </div>


            </div>


        </div>
    );
};

export default Home;