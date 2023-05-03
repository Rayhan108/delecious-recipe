import React from "react";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Login from "../../pages/Home/Login/Login";
import Register from "../../pages/Home/Register/Register";
import ChefDetails from "../../pages/Home/ChefDetails/ChefDetails";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import ErrorPage from "../../pages/Home/ErrorPage/ErrorPage";
;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/:id",
        element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
        loader:({params})=>fetch(`https://assignment10-server-rayhan108.vercel.app/alldata/${params.id}`)
      },  
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/blog",
        element:<>This is blog</>,
      },
  
    ],
  },

]);

export default router;
