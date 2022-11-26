import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
// const stripePromise = loadStripe('pk_test_51M67EgIZhyRs9b7lTmlXBQ8QvGeWgqVG96Wl8itRhnMWB5TKyOG2Iq2rXdYQYubZHFX29xnophCfq0mkdPSUrrVJ00dSIPfeEo')
console.log(stripePromise)

const Payment = () => {


    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h1>Are you sure you want to payment for  {data.productname} ?</h1>
            <h1>please pay {data.productprice} taka</h1>
            <h1>{data.productid
            }</h1>

            <div className='w-96 my-12'>
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