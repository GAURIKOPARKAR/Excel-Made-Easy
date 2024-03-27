import React from 'react';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  const router = createBrowserRouter([
   { path: "/",
    element:<><Navbar/><Home/></>
  },
  { path: "/About",
    element:<><Navbar/><About/></>
  },
  { path: "/Contact",
    element:<><Navbar/><Contact/></>  }


  ])

  return (
    <>
     <div className='bg-[url("./public/Images/grid.avif")] h-screen w-screen'>
     <RouterProvider router={router}></RouterProvider> 
     </div>
      <Footer></Footer>
    </>
  );
};

export default App;
