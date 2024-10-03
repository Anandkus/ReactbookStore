import React from 'react';
import Navbar from './Navbar';
import { useForm } from "react-hook-form";
import Footer from './Footer';
import axios from 'axios';
import toast from 'react-hot-toast';
import {NavLink,useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const contactInfo = {
      fullname: data.fullname,
      email: data.email,
      phone: data.phone
    }
    await axios.post("http://localhost:1101/contact/", contactInfo).then((res) => {
      if (res.data) {
        toast.success(res.data.message);
        navigate('/');
      }
    }).catch((err) => {
      if (err.response) {
        toast.error(err.response.data.message);
      }
    })

  }
  return (
    <>
      <Navbar />
      <div className='flex justify-center items-center min-h-screen' >
        <div className="modal-box dark:bg-slate-900 dark:text-white dark:border  ">
          <form method='dialog'>
            <h3 className="font-bold text-2xl text-center">Contact Us</h3>
            <div className='mt-4 space-y-2'>
              <span>Full Name</span><br />
              <input type="text" placeholder='enter name..' className='w-80 outline-none px-3  py-1 border rounded-md' {...register("fullname", { required: true })} />
              <br />
              {errors.fullname && <span className='text-md text-red-300 '>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>email</span><br />
              <input type="text" placeholder='enter email..' className='w-80 outline-none px-3  py-1 border rounded-md'{...register("email", { required: true })} />
              <br />
              {errors.email && <span className='text-md text-red-300 '>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>contact no.</span><br />
              <input type="text" placeholder='enter number..' className='w-80 outline-none px-3  py-1 border rounded-md'  {...register("phone", { required: true })} />
              <br />
              {errors.phone && <span className='text-md text-red-300 '>This field is required</span>}
            </div>

          </form>
          <div className='flex justify-start mt-4 '>
            <button type='submit' className='bg-pink-500 text-white  rounded-md  px-3 py-1 hover:bg-pink-700 duration-200' onClick={handleSubmit(onSubmit)}>Submit</button>

          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact