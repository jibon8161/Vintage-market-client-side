import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
const CheckoutForm = ({ payment }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('')
    const [transectionId, settransectionId] = useState()
    const [processing, setProcessing] = useState(false)

    const { productprice, productname, email, productid } = payment

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {

                "Content-Type": "application/json",

                // authorization: `bearer ${localStorage.getItem('token')}`

            },
            body: JSON.stringify({ productprice }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }, [productprice]);

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({

            type: "card",
            card: card,



        });
        if (error) {

            console.log(error)
            setCardError(error.message)

        }
        else {

            setSuccess(' ');
            setProcessing(true)

        }
        setSuccess(' ');
        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: productname,

                    }
                },
                // return_url: 'https://example.com/return_url'
            }
        );

        if (confirmError) {

            setCardError(confirmError.message)
            return


        }

        if (paymentIntent.status === 'succeeded') {

            setSuccess('Congrats ! yor payment completed')
            setProcessing(true)
            settransectionId(paymentIntent.id)

        }

        setProcessing(false)

        const paymentInfo = {

            productprice,
            transectionId: paymentIntent.id,
            email,
            payId: payment._id



        }

        fetch('http://localhost:5000/payments', {



            method: 'POST',

            headers: {

                'content-type': 'application/json',


            },
            body: JSON.stringify(paymentInfo)


        })
            .then(res => res.json())
            .then(data => {

                console.log(data)

                if (data.insertedId) {

                    setSuccess('Congrats ! yor payment completed')
                    settransectionId(paymentIntent.id)
                    toast.success('Congrats ! yor payment completed')




                }


            })





    }

    const delbtn = id => {



        console.log(id)

        fetch(`http://localhost:5000/paid/${id}`, {


            method: "PUT",



        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {

                    toast.success('seller verified')


                }

            })





    }



    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button onClick={() => delbtn(productid)} className='btn btn-sm mt-4 btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>

                        Pay
                    </button>
                </form>
                <p className="text-red-500">{cardError}</p>
                {

                    success && <div>

                        <p className='text-green-500'>{success}</p>
                        <p>Your transactionId: <span className='font-bold'>{transectionId}</span></p>

                    </div>

                }

            </div>
        </div>
    );
};

export default CheckoutForm;