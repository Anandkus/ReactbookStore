import React from 'react';
import Navbar from './Navbar';

import Footer from './Footer';
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center min-h-screen' >
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border  ">
          <form >
            <h3 className="font-bold text-2xl text-center">Contact Us</h3>
            <div className='mt-4 space-y-2'>
              <span>Full Name</span><br />
              <input type="text" placeholder='enter name..' className='w-80 outline-none px-3  py-1 border rounded-md' />
            </div>
            <div className='mt-4 space-y-2'>
              <span>email</span><br />
              <input type="text" placeholder='enter email..' className='w-80 outline-none px-3  py-1 border rounded-md' />
            </div>
            <div className='mt-4 space-y-2'>
              <span>contact no.</span><br />
              <input type="text" placeholder='enter number..' className='w-80 outline-none px-3  py-1 border rounded-md' />
            </div>

          </form>
          <div className='flex justify-start mt-4 '>
            <button type='submit' className='bg-pink-500 text-white  rounded-md  px-3 py-1 hover:bg-pink-700 duration-200' >Submit</button>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact