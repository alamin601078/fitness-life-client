import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { axiosSecure } from "../../Hooks/useAxiosSecure";




const Profile = () => {
    const { user } = useAuth()
    const email= user?.email;
    const [profile ,setProfile] = useState({});
    useEffect(() =>{
    
        axiosSecure.get(`/users/${email}`)
        .then(res =>{
            // console.log(res.data)
            setProfile(res.data)
        })
    })
    // console.log(profile)
    return (
        <div className="flex flex-col justify-center items-center py-52 h-full  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800">
	<img src={profile?.photourl} alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
	<div className="space-y-4 text-center divide-y dark:divide-gray-300">
		<div className="my-2 space-y-1">
			<h2 className="text-xl font-semibold sm:text-2xl">Name : {profile?.name}</h2>
			<h2 className="text-xl font-semibold sm:text-2xl">Email : {profile?.email}</h2>
			<p className="px-5 text-xs sm:text-base dark:text-gray-600">Role : {profile?.role}</p>
		</div>
		
	</div>
</div>
    );
};

export default Profile;