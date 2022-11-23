import React from 'react';
import { useNavigate } from 'react-router-dom';
import Advertisement from './Advertisement';

const Home = () => {
    const navigate = useNavigate()

    const smart = () => {


navigate('/smart')



    }

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

            <div>
                <h1 className='mt-5 mb-5 text-5xl uppercase  font-bold underline'><span className='text-purple-400'>choose</span> a category</h1>
                <div className='grid grid-cols-3'>

                    <div className="max-w-xs p-6 rounded-md  dark:bg-gray-900 dark:text-gray-50">
                        <img src="https://www.mobiledokan.com/wp-content/uploads/2022/09/Apple-iPhone-14-Pro-Max.jpg" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">

                            <h2 className="text-xl font-semibold tracking-wide">smartphones</h2>
                        </div>
                        <button onClick={smart} className="btn btn-outline btn-primary">Click Here</button>
                    </div>

                    <div className="max-w-xs p-6 rounded-md  dark:bg-gray-900 dark:text-gray-50">
                        <img src="https://cdn.dxomark.com/wp-content/uploads/medias/post-47183/galaxy-z-flip-by-samsung.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">

                            <h2 className="text-xl font-semibold tracking-wide">folding phones</h2>
                        </div>
                        <button className="btn btn-outline btn-primary">Click Here</button>
                    </div>

                    <div className="max-w-xs p-6 rounded-md  dark:bg-gray-900 dark:text-gray-50">
                        <img src="https://i.gadgets360cdn.com/large/Nokia_3310_1487075565010.png" alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                        <div className="mt-6 mb-2">

                            <h2 className="text-xl font-semibold tracking-wide">Basic phones</h2>
                        </div>
                        <button className="btn btn-outline btn-primary">Click Here</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;