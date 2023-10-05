import "./index.css";
import Home from "./Compo/Home/Home";
import HomeContent from "./Compo/HomeContent/HomeContent";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [{
      path: "/",
      element: <HomeContent></HomeContent>
    },
    {
      path: "/projects",
      element: <></>
    },
    {
      path: "/contact",
      element: <></>
    },
    {
      path: "/more",
      element: <></>
    }




    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
