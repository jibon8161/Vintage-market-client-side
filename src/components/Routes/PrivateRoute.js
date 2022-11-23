import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { InfoContext } from '../AuthProvider/AuthContext';



const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loader } = useContext(InfoContext)
    if (loader) {

        return <div className="w-32 h-32 border-4 border-dashed rounded-full animate-spin mx-auto mt-32 mb-32 border-red-600"></div>


    }

    if (user && user?.uid) {

        return children;
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    );
};

export default PrivateRoute;