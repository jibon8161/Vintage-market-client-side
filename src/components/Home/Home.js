import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmartPhones from '../Phones/SmartPhones';
import Advertisement from './Advertisement';
import Mobiles from './Mobiles/Mobiles';
import vidbg from '../Home/Waves - 70796.mp4'
import { FaDove, FaGrinHearts, FaRunning, FaHeart } from "react-icons/fa";
const Home = () => {
    const navigate = useNavigate()



    const { data: categorynames = [], isLoading } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch('http://localhost:5000/categoryname')
            .then(res => res.json())



    })




    console.log(categorynames)



    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl bg-black text-white mt-2 font-semibold uppercase '><span className='text-purple-400'>Wellcome</span> to Vintage resale market</h1>
            <p className='font-medium mb-5 uppercase underline text-2xl'><span className='text-purple-400'>May all </span> your heart desires be granted</p>
            <div>

                <div className="carousel w-full h-[500px]">
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

            <div className='mt-5'>
                <Advertisement></Advertisement>
            </div>

            <div className='lg:grid grid-cols-3 container mx-auto'>

                {

                    categorynames.map(category => <Mobiles key={category._id} category={category}></Mobiles>)


                }

            </div>


            <div>


                <div className='mb-8 mt-8'>

                    {/* .............................................about me section.................................................................. */}

                    <div className="hero lg:min-h-screen container mx-auto shadow-2xl shadow-slate-800 text-white">
                        <div className="hero-content text-center">
                            <section className="p-6 my-6">
                                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
                                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                            <FaDove className='text-5xl'></FaDove>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle">
                                            <p className="text-3xl font-semibold leading-none stat-value text-primary">100%</p>
                                            <p className="capitalize">User Satisfaction</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6">
                                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4">
                                            <FaGrinHearts className='text-5xl'></FaGrinHearts>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle">
                                            <p className="text-3xl font-semibold leading-none stat-figure text-secondary">60%</p>
                                            <p className="capitalize">Repeat clients</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6">
                                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                            <FaRunning className='text-5xl'></FaRunning>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle ">
                                            <p className="text-3xl font-semibold leading-none stat-figure text-warning">9000+</p>
                                            <p className="capitalize">Product sold</p>
                                        </div>
                                    </div>
                                    <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 ">
                                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 ">
                                            <FaHeart className='text-5xl'></FaHeart>
                                        </div>
                                        <div className="flex flex-col justify-center align-middle">
                                            <p className="text-3xl font-semibold leading-none stat-figure text-accent">2M</p>
                                            <p className="capitalize">Followers</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <video src={vidbg} autoPlay loop muted></video>

                    </div>



                </div>


            </div>


        </div>
    );
};

export default Home;