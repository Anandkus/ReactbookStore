import React from 'react'
import { Link } from 'react-router-dom';
import Login from './login';
import { useForm } from "react-hook-form";
const signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <div className='flex justify-center items-center min-h-screen' >
                <div className="modal-box dark:bg-slate-900 dark:text-white dark:border  ">
                    <form >
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        <h3 className="font-bold text-2xl">SignUp</h3>
                        <div className='mt-4 space-y-2'>
                            <span>User Name</span><br />
                            <input type="text" placeholder='Enter  Fullname' className='w-80 outline-none px-3  py-1 border rounded-md' {...register("userName", { required: true })} />
                            <br />
                            {errors.userName && <span className='text-md text-red-300 '>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email" placeholder='Enter  Email' className='w-80 outline-none px-3  py-1 border rounded-md' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-md text-red-300 '>This field is required</span>}
                        </div>
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type="password"  placeholder='Enter Password' className='w-80 outline-none px-3  py-1 border rounded-md' {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-md text-red-300 '>This field is required</span>}
                        </div>
                    </form>
                    <div className='flex justify-around mt-4 '>
                        <button type='submit' className='bg-pink-500 text-white  rounded-md  px-3 py-1 hover:bg-pink-700 duration-200' onClick={handleSubmit(onSubmit)}>Submit</button>
                        <p >Have Account{" "} <button onClick={() => document.getElementById('my_modal_3').showModal()} className='underline text-blue-500 cursor-pointer'>LogIn</button>              <Login />
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default signup