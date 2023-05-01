import React from "react";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

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
    ],
  },
]);

export default router;
