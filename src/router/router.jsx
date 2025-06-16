import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../MainLayouts.jsx/MainLayoutes";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivetRoute from "../Auth/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoutes />,
    // errorElement: <p>error</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivetRoute>
            <JobDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
