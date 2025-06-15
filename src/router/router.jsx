import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayoutes from '../MainLayouts.jsx/MainLayoutes';
import Home from '../pages/Home';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoutes />,
        errorElement: <p>error</p>,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ]
    }
])

export default router;