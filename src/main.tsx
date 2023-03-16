import React from 'react'
import ReactDOM from 'react-dom/client'
import '@styles/index.css'

import HomePage from '@pages/HomePage'
import DigitalLibrary from '@pages/DigitalLibrary'
import Social from '@pages/Social'

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/DigitalLibrary",
    element: <DigitalLibrary/>,
  },
  {
    path: "/Social",
    element: <Social/>,
  },    
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router}/>

)
