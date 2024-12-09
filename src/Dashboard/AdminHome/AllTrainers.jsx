import { useEffect, useState } from "react";
import { FaTrademark, FaTrashAlt, FaUsers } from "react-icons/fa";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";
import { axiosSecure } from './../../Hooks/useAxiosSecure';


const AllTrainers = () => {
    const [users, setusers]= useState([])
    useEffect(() =>{
    
      axiosPublic.get(`/allTrainer`)
      .then(res =>{
          // console.log(res.data)
          setusers(res.data)
      })
    })
    // console.log("admin all " ,users)

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifinedCount > 1){
                // refetch()
                // Swal.fire({
                //     position: "top-end",
                //     icon: "success",
                //     title:`${user.name} is an Admin Now`,
                //     showConfirmButton: false,
                //     timer: 1500
                //   });
            }
        })
    }
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const id = user._id
                console.log(id)
                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 1) {
                            // refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div>
        <div className="flex justify-evenly my-4">
            <h2 className="text-3xl">All Trainers</h2>
            <h2 className="text-3xl">Total Trainers: {users.length}</h2>
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
                        users.map((user, index) => <tr key={user._id}>
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
                                <button
                                    onClick={() => handleDeleteUser(user)}
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllTrainers;