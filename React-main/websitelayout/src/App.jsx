import React from 'react';
import { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import './App.css'
import Home from './MyComponents/Home/Home';
import About from './MyComponents/About/About';
import Contact from './MyComponents/Contact/Contact';
import Footer from './MyComponents/Footer/Footer';
import Layout from './MyComponents/Layout/Layout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "About",
          element: <About/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        },
        {
          path: "home",
          element: <Home/>,
        },
        {
          path: "",
          element: <Home/>,
        }
      ]
    },
  
  ]);

  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );

  return (
    <>
          <RouterProvider router={router} />

   {/* <Layout></Layout> */}
    </>
  )
}

export default App
