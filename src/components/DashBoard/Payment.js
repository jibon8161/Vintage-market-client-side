import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// const stripePromise = loadStripe('pk_test_51M67EgIZhyRs9b7lTmlXBQ8QvGeWgqVG96Wl8itRhnMWB5TKyOG2Iq2rXdYQYubZHFX29xnophCfq0mkdPSUrrVJ00dSIPfeEo')
console.log(stripePromise)

const Payment = () => {

    const navigation = useNavigation()

    const data = useLoaderData()
    console.log(data)

    if (navigation.state === 'loading') {

        return <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div>

    }
    return (
        <div className='mt-12'>
            <h1 className='text-5xl uppercase '>You are  paying  for  <span className='text-purple-700 font-bold'>{data.productname}</span> it will cost <span className='text-purple-700 font-bold'> {data.productprice} </span> taka only</h1>



            <div className='w-full md:my-12 mx-auto md:p-20 shadow-inner shadow-slate-900 '>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        payment={data}
                    />
                </Elements>

            </div>
        </div>
    );
};

export default Payment;