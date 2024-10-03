import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import {NavLink,useNavigate } from "react-router-dom";
const login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:1101/user/login/", userInfo).then((res) => {
            if (res.data) {
                //alert(res.data.message);
                toast.success(res.data.message);
                document.getElementById("my_modal_3").close();
                navigate('/');
                window.location.reload();
            }
            localStorage.setItem("user", JSON.stringify(res.data.user))
        }).catch((err) => {
            if (err.response) {
                toast.error(err.response.data.message);
            }
        })
    };

    return (
        <>
            <div  >
                <dialog id="my_modal_3" className="modal " >
                    <div className="modal-box dark:bg-slate-900 dark:text-white dark:border" >
                        <form method='dialog'>
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()} >✕</Link>

                            <h3 className="font-bold text-lg">Login</h3>
                            <div className='mt-4 space-y-2 '>
                                <span>Email</span><br />
                                <input type="email" placeholder='Enter  Email' className='w-80 outline-none px-3  py-1 border rounded-md ' {...register("email", { required: true })} />
                                <br />
                                {errors.email && <span className='text-md text-red-300 '>This field is required</span>}
                            </div>
                            <div className='mt-4 space-y-2'>
                                <span>Password</span><br />
                                <input type="password" name="" id="" placeholder='Enter Password' className='w-80 outline-none px-3  py-1 border rounded-md' {...register("password", { required: true })} />
                                <br />
                                {errors.password && <span className='text-md text-red-300 '>This field is required</span>}
                            </div>
                            <div className='flex justify-around mt-4 '>
                                <button type='submit' className='bg-pink-500 text-white  rounded-md  px-3 py-1 hover:bg-pink-700 duration-200' onClick={handleSubmit(onSubmit)}>Login</button>

                                <p>Not registered?{" "} <Link to='/res' className='underline text-blue-500 cursor-pointer' >Signup</Link></p>

                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default login