import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { InfoContext } from '../AuthProvider/AuthContext';
import Footer from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';


const DashBoardLayout = () => {

    const { user, logOut } = useContext(InfoContext)


    const [users, setUsers] = useState({})

    const [loading, setLoading] = useState(true)


    useEffect(() => {

        if (user) {

            fetch(`http://localhost:5000/usersByemail?email=${user?.email}`, {


                headers: {

                    authorization: `Bearer ${localStorage.getItem('token')}`

                }


            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {

                        logOut()


                    }

                    return res.json()

                })
                .then(data => {

                    setUsers(data)


                    setLoading(false)
                })




        }



    }, [user])



    return (
        <div>
            <Navbar></Navbar>
            {

                loading ? <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div>
                    :

                    <div className="drawer drawer-mobile lg:w-9/12">
                        <input id="userPanel" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="userPanel" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                                {
                                    users?.[0]?.role === 'user' &&
                                    <>
                                        <li><Link to='/dashboard/user'>My orders</Link></li>

                                    </>

                                }

                                {
                                    users?.[0]?.role === 'seller' &&
                                    <li><Link to='/dashboard/addproducts'>Add A product </Link></li>

                                }
                                {
                                    users?.[0]?.role === 'admin' &&
                                    <>
                                        <li><Link to='/dashboard/allsellers'>All Sellers </Link></li>
                                        <li><Link to='/dashboard/allbuyers'>All Buyers  </Link></li>
                                        <li><Link to='/dashboard/reported'>Reported Items </Link></li>
                                    </>

                                }

                            </ul>

                        </div>
                    </div>
            }
            <Footer></Footer>
        </div>
    );
};

export default DashBoardLayout;