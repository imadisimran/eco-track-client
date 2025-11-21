import React from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const LogOutBtn = () => {
    const {logOut}=useAuth()
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
            Swal.fire({
                    icon: "success",
                    title: `Logged Out Successfully`,
                    timer:2000,
                });
        })
        .catch(err=>{
            console.log(err)
            Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
        })
    }
    return (
        <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>
    );
};

export default LogOutBtn;