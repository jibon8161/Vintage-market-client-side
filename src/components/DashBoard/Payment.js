import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigation } from 'react-day-picker';

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