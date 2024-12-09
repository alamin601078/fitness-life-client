import Swal from "sweetalert2";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import { FaTrademark } from "react-icons/fa";

const AppliedTrainer = () => {

    const [applayusers, setapplayusers]= useState([])
    useEffect(() =>{
    
      axiosPublic.get(`/applyallTrainer`)
      .then(res =>{
          // console.log(res.data)
          setapplayusers(res.data)
      })
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/applayusers/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifinedCount > 0){
                // refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title:`${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Trainers</h2>
            <h2 className="text-3xl">Total Trainers: {applayusers.length}</h2>
        </div>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        applayusers.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.trainerName}</td>
                            <td>{user.email}</td>
                            <td>
                                { user.role === 'admin' ? 'Admin' : <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-lg bg-orange-500">
                                    <FaTrademark className="text-white 
                                    text-2xl"></FaTrademark>
                                </button>}
                            </td>
                            <td>
                                {/* <button
                                    onClick={() => handleDeleteUser(user)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button> */}
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AppliedTrainer;