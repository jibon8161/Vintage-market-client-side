import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
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


    }












])