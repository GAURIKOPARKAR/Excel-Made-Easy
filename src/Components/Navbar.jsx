import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <nav className='bg-green-600 h-15 w-[100vw] p-4 flex justify-between'>
     <ul className="flex justify-start items-center gap-12">
        <li className='hover:border rounded-xl p-2'>
          <Link to='/' className="text-white hover:text-gray-300 hover:cursor-pointer">Services</Link>
        </li>
        <li className='hover:border rounded-xl p-2'>
          <Link to='/About' className="text-white hover:text-gray-300 hover:cursor-pointer">About me</Link>
        </li>
        <li className='hover:border rounded-xl p-2'>
          <Link to='/Contact' className="text-white hover:text-gray-300 hover:cursor-pointer">Contact us</Link>
        </li>
        <li>
  <div className='text-white m-2'>Book your free consultation</div>
  <a className='animate-pulse text-blue-900 rounded-md px-4 py-2 bg-white hover:animate-none hover:text-blue-900 font-bold text-xl mt-[0.5rem]' target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSf9RUpLMCEjA5Sg6wuG5qnwDrFCt1mWtOUZXIEyWsODZOFS6w/viewform?usp=sf_link">
    Click here
  </a>
</li>


     </ul>
     <div className='flex-col items-center'>
  <div className='flex text-yellow-200 text-2xl font-bold'><img className='h-8 w-8 m-2' src="./public/Images/logo.png" alt="" />Excel Made Easy</div>
  <div className='text-black text-sm ml-8'>- by Ashok Koparkar</div>
</div>

   </nav>
   </>
  );
};

export default Navbar;
