import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { InfoContext } from '../../AuthProvider/AuthContext';
import BookinigModal from './BookinigModal';
import DisplayMobiles from './DisplayMobiles';


const AllMobiles = () => {
    const { id } = useParams()

    const [bookin, setBooking] = useState(null)
    const [mobiles, setMobiles] = useState()

    useEffect(() => {


        fetch(`http://localhost:5000/category?category=${id}`)
            .then(res => res.json())
            .then(data => setMobiles(data))




    }, [id])


    console.log(mobiles)




    return (
        <div className='lg:grid grid-cols-2 md:grid md:grid-cols-2 '>
            {


                mobiles?.map(mobile => <DisplayMobiles key={mobile._id} setBooking={setBooking} mobile={mobile}></DisplayMobiles>)



            }


            <BookinigModal mobile={bookin}></BookinigModal>
        </div >
    );
};

export default AllMobiles;