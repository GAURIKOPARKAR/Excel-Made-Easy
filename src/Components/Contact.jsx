import React from 'react';

const Contact = () => {
  return (
    <div className='flex justify-center items-center m-5'>
      <div className='bg-white rounded-lg shadow-md p-8 max-w-md'>
        <h2 className='text-3xl font-bold mb-6 text-center'>Contact Us</h2>
        <div className='mb-4'>
          <strong>Email:</strong> <span className='text-yellow-500'>ash.koparkar@gmail.com</span>
        </div>
        <div className='mb-4'>
          <strong>Contact Number:</strong> <span className='text-yellow-500'>8055959549</span>
        </div>
        <div>
          <strong>Address:</strong> <span className='text-yellow-500'>Plot No. 55 Yashwant Nagar, Jalgaon (425001)</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
