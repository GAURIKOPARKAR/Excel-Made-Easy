import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className='bg-green-600 w-full sm:h-15 p-4 flex flex-col sm:flex-row justify-between items-center'>
        <div className='flex items-center justify-center sm:justify-start'>
          <img className='h-8 w-8 m-2' src="./dist/Images/logo.png" alt="" />
          <div className='text-yellow-200 text-xl sm:text-2xl font-bold'>Excel Made Easy</div>
        </div>
        <ul className="flex justify-center sm:justify-start items-center gap-4 sm:gap-12">
          <li className='hover:border rounded-xl p-2'>
            <Link to='/' className="text-white hover:text-gray-300 hover:cursor-pointer">Services</Link>
          </li>
          <li className='hover:border rounded-xl p-2'>
            <Link to='/About' className="text-white hover:text-gray-300 hover:cursor-pointer">About me</Link>
          </li>
          <li className='hover:border rounded-xl p-2'>
            <Link to='/Contact' className="text-white hover:text-gray-300 hover:cursor-pointer">Contact us</Link>
          </li>
        </ul>
        <div className='flex items-center justify-center sm:justify-end mt-4 sm:mt-0'>
          {/* <div className='text-white m-2'></div> */}
          <a className='animate-pulse text-blue-900 rounded-md px-4 py-2 bg-white hover:animate-none hover:text-blue-900 font-bold text-lg sm:text-xl mt-2 sm:mt-0' target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSf9RUpLMCEjA5Sg6wuG5qnwDrFCt1mWtOUZXIEyWsODZOFS6w/viewform?usp=sf_link">
            Click here for free consultation
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
