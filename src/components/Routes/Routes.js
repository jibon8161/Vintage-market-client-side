import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";

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

            }







        ]


    }












])