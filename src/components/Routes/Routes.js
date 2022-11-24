import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../DashBoard/AddProducts";
import DashBoard from "../DashBoard/DashBoard";
import Home from "../Home/Home";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Basic from "../Phones/Basic";
import Folding from "../Phones/Folding";
import SmartPhones from "../Phones/SmartPhones";
import Register from "../Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([

    {

        path: '/',
        element: <Main></Main>,
        errorElement: <p>Error</p>,
        children: [

            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/register',
                element: <Register></Register>

            },
            {
                path: '/smart',
                element: <SmartPhones></SmartPhones>

            },
            {
                path: '/folding',
                element: <Folding></Folding>

            },
            {
                path: '/basic',
                element: <PrivateRoute><Basic></Basic></PrivateRoute>

            },
        ]

    },
    {

        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        errorElement: <p>error</p>,
        children: [

            {

                path: '/dashboard',
                element: <DashBoard></DashBoard>

            },
            {

                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>

            }









        ]


    }












])