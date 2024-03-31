import React from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { path: "/",
    element: <><Navbar /><Home /></>
  },
  { path: "/About",
    element: <><Navbar /><About /></>
  },
  { path: "/Contact",
    element: <><Navbar /><Contact /></>  
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <div className='bg-hero sm:h-screen sm:w-screen'>
        
       
     <RouterProvider router={router}></RouterProvider>
     </div>
    <App />
   
  </React.StrictMode>,
)
