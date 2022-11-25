import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SmartPhones from '../Phones/SmartPhones';
import Advertisement from './Advertisement';
import Mobiles from './Mobiles/Mobiles';

const Home = () => {
    const navigate = useNavigate()



    const { data: categorynames = [], isLoading } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch('http://localhost:5000/categoryname')
            .then(res => res.json())



    })




    console.log(categorynames)



    return (
        <div>
            <h1 className='text-4xl bg-black text-white mt-2 font-semibold uppercase '><span className='text-purple-400'>Wellcome</span> to Vintage resale market</h1>
            <p className='font-medium mb-5 uppercase underline text-2xl'><span className='text-purple-400'>May all </span> your heart desires be granted</p>
            <div>

                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full " alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://placeimg.com/800/200/arch" className="w-full " alt='' />
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

            <div className='grid grid-cols-3'>

                {

                    categorynames.map(category => <Mobiles key={category._id} category={category}></Mobiles>)


                }

            </div>

        </div>
    );
};

export default Home;