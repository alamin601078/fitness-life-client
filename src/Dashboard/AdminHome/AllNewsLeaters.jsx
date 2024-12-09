import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";


const AllNewsLeaters = () => {
    const [users, setusers]= useState([])
    useEffect(() =>{
    
      axiosPublic.get(`/allNews`)
      .then(res =>{
          // console.log(res.data)
          setusers(res.data)
      })
    })
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
                            {/* <td>
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
                            </td> */}
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default AllNewsLeaters;