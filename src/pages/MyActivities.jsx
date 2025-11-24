import React, { useEffect, useState } from 'react';
import useAxios from '../hooks/useAxios';
import useAuth from '../hooks/useAuth';

const MyActivities = () => {
    const [data,setData]=useState([])
    const axiosInstance=useAxios()
    const {user}=useAuth()

    useEffect(()=>{
        axiosInstance.get(`/user-challenges?email=${user.email}`)
        .then(result=>{
            setData(result.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[axiosInstance,user])

    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>My Challenges</th>
                            <th>Progress</th>
                            <th>Update Progress</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyActivities;