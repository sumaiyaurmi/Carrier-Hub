import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Statistic from "./Components/Statistics/Statistic.jsx";
import AppliedJobs from "./Components/Applied Jobs/AppliedJobs.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import JobDetails from "./Components/Home/Feature/JobDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistic></Statistic>,
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs></AppliedJobs>,  
        loader : () => fetch('../public/jobs.json')
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader : ()=> fetch('../public/jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
