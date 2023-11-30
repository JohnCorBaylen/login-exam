import { Navigate, createBrowserRouter } from "react-router-dom";

import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Users from "./views/Users";
import Login from "./views/Login";
import Signup from "./views/Signup";
import NotFound from "./views/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/user"/>
            },
            {
                path: '/user',
                element: <Users/>
            }
        ]
    },
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router