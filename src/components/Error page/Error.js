import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import er from './err.json'
const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-4xl dark:text-gray-600">
                            <Lottie className='lg:w-[80%] mx-auto mt-5' animationData={er}></Lottie>
                            ERROR {error.status}
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">{error.statusText}</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on homepage.</p>
                        <Link to='/' className="btn btn-outline px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Error;