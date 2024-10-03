import React from 'react'
import { useAuth } from '../../contex/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const HandleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("user");
            toast.success("Logout Successfully!");
            window.location.reload();
        } catch (error) {
            toast.error("error " + error.message);
        }
    }
    return (
        <div>

            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={HandleLogout}>Logout</button>
        </div>
    )
}

export default Logout