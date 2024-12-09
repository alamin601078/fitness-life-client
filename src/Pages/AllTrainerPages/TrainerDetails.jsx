import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosPublic } from "../../Hooks/useAxiosPublic";

const TrainerDetails = () => {

    const {_id} = useParams();
    // console.log(_id)

    const [singleTrainer, setSingleTrainer]= useState([])
   useEffect( () =>{
    axiosPublic.get(`/singletrainer`)
    .then(res =>{
        // console.log(res.data)
        setSingleTrainer(res.data)
    })
   })
//    console.log(cadTrainer)
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800 pt-52">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
               
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                        <div>
                           <img
                            src={singleTrainer?.profileImage }
                            alt="card-image"
                            />
                        </div>
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                            <h3 className="text-xl font-semibold tracking-wide">Trainer name :{singleTrainer?.trainerName} </h3>
                            <time className="text-xs tracking-wide uppercase dark:text-gray-600">Years of Experience : {singleTrainer?.yearsOfExperience}</time>
                            <p className="mt-3">Social icons : {singleTrainer?.socialIcons}</p>
                            <p className="mt-3">Other info : {singleTrainer?.otherInfo}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block  before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                        <h3 className="text-3xl font-semibold">Trainers available time</h3>
                        <h3 className="text-3xl font-semibold mb-2"> : {singleTrainer?.yearsOfExperience}</h3>
                        <Link to={"/trainerbookedpages"} className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-2">Available slots</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
};

export default TrainerDetails;