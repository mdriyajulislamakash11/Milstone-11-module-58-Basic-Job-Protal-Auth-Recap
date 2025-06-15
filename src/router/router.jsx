import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayoutes from '../MainLayouts.jsx/MainLayoutes';
import Home from '../pages/Home';
import Register from '../pages/Register';
import SignIn from '../pages/SignIn';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoutes />,
        // errorElement: <p>error</p>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/signIn",
                element: <SignIn />
            },
        ]
    }
])

export default router;