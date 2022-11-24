import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../Navbar/Navbar';

const DashBoardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default DashBoardLayout;