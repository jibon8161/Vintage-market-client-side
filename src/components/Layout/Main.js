import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Nav } from '../Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;