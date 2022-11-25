import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { InfoContext } from '../AuthProvider/AuthContext';

const MyProducts = () => {

    const { user } = useContext(InfoContext)

    const { data: myproduct = [], isLoading } = useQuery({


        queryKey: ['email'],
        queryFn: () => fetch(`http://localhost:5000/myproduct?selleremail=${user?.email}`)
            .then(res => res.json())



    })

    console.log(myproduct)
    return (
        <div>
            <h1>{myproduct?.[0]?.sellerEmail
}</h1>

        </div>
    );
};

export default MyProducts;