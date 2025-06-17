import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayoutes from "../MainLayouts.jsx/MainLayoutes";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "../Auth/PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplication from "../pages/MyApplication";
import AddJobs from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import AllJobs from "../pages/AllJobs";

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
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply></JobApply>
          </PrivateRoute>
        ),
      },
      {
        path: "/job-applications",
        element: (
          <PrivateRoute>
            <MyApplication />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/allJobs",
        element: (
          <PrivateRoute>
            <AllJobs />
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:5000/jobs`),
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
