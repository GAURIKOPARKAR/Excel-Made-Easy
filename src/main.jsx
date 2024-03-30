import React from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const firebaseConfig = {
  apiKey: "AIzaSyBxOvcIKy4pS4OXrxE5FR9yn3ZHM9JC7zQ",
  authDomain: "excel-made-easy.firebaseapp.com",
  projectId: "excel-made-easy",
  storageBucket: "excel-made-easy.appspot.com",
  messagingSenderId: "807319047426",
  appId: "1:807319047426:web:20c988a80847f81766061b",
  measurementId: "G-P6PEKJ04ZB"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
     <div className='bg-[url("./public/Images/grid.avif")] h-screen w-screen'>
        
       
     <RouterProvider router={router}></RouterProvider>
     </div>
    <App />
   
  </React.StrictMode>,
)
