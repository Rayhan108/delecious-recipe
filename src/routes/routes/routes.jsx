import React from "react";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Home/Login/Login";
import Register from "../../pages/Home/Register/Register";
import ChefDetails from "../../pages/Home/ChefDetails/ChefDetails";
import DetailsLayout from "../../layout/detailsLayout/DetailsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element:<>This is blog</>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
    ],
  },
  {
    path:"/details",
    element:<DetailsLayout></DetailsLayout>,
    children:[

      {
        path:"/details/:id",
        element: <ChefDetails></ChefDetails>,
        loader:({params})=>fetch(`http://localhost:5000/alldata/${params.id}`)
      }
    ]
  }
]);

export default router;
