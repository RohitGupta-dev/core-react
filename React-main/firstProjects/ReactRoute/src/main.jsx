import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from "./Layout"
import  MyParams from "./Components/MyParams"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Github,{githubInfoLoader} from "./Components/Github"
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='myparams/:userid' element={<MyParams />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)