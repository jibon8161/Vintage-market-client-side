import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { InfoContext } from '../AuthProvider/AuthContext';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';


const DashBoardLayout = () => {

    const { user } = useContext(InfoContext)



    const [users, setUsers] = useState({})


    // console.log(user?.email)
    // const { data: datas = [], isLoading } = useQuery({


    //     queryKey: ['users'],
    //     queryFn: () => fetch(`http://localhost:5000/allusers`, {
    //     })
    //         .then(res => res.json())



    // })

    // console.log(datas.role)

    useEffect(() => {

        if (user?.email) {

            fetch(`http://localhost:5000/usersByemail?email=${user?.email}`)
                .then(res => res.json())
                .then(data => {

                    setUsers(data)
                    console.log(data)


                })




        }



    }, [user.email])



    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="userPanel" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="userPanel" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {
                            users[0]?.role === 'user' &&
                            <li><Link>My orders</Link></li>

                        }
                        {
                            users?.[0]?.role === 'Seller' &&
                            <li><Link to='/dashboard/addproducts'>Add A product </Link></li>

                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;