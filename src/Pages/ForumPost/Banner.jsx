import { useForm } from "react-hook-form";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
// import Swal from "sweetalert2";

const Banner = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axiosPublic.post('/add', data)
        .then(res => {
            if (res.data.insertedId) {
                console.log('user added to the database')
                reset();
                // Swal.fire({
                //     position: 'top-end',
                //     icon: 'success',
                //     title: 'User created successfully.',
                //     showConfirmButton: false,
                //     timer: 1500
                // });
                
            }
        })
    }
    return (
        <div className="hero min-h-1.5 pt-24 bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">WellCome </h1>
            <p className="pt-6">I am writing to express my interest in the fitness trainer position at Fitness Life, as advertised.</p>
            <p className="pb-6">As a certified fitness trainer with over [X years/months] of experience, I have had the privilege of working with diverse clientele, ranging from beginners to advanced athletes.</p>
           <button className="btn bg-opacity-30  bg-black"  onClick={()=>document.getElementById('my_modal_5').showModal()}>Add Post Now</button>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
  <form onSubmit={handleSubmit(onSubmit)}  className="container flex flex-col w-full max-w-md p-4 rounded-md shadow sm:p-8 space-y-12 bg-gray-50 bg-opacity-50 "
         >
            <p className="font-medium text-lg text-center mt-3 ">Your Inormation</p>
             <fieldset className="flex justify-center items-center gap-6 p-6 rounded-md shadow-sm ">
         
        
                <div className="gap-4 col-span-full lg:col-span-3">
                    <div className="">
                        <label htmlFor="trainerName" className="text-sm">Trainer Name</label>
                        <input id="trainerName" type="text" placeholder="Trainer Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("trainerName", { required: true })} 
                        />
                        {errors.trainerName && <span className="text-red-500">This field is required</span>}
                    </div><br />
                    <div className="">
                        <label htmlFor="profileImage" className="text-sm">Profile Image</label>
                        <input id="profileImage" type="text" placeholder="Profile Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("profileImage")}  
                        />
                    </div><br />
                    <div className="">
                        <label htmlFor="yearsOfExperience" className="text-sm">Years of Experience</label>
                        <input id="yearsOfExperience" type="text" placeholder="Years of Experience" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("yearsOfExperience")} 
                        />
                    </div> <br />
                    <div className="">
                        <label htmlFor="socialIcons" className="text-sm">Social Icons</label>
                        <input id="socialIcons" type="text" placeholder="Social Icons URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("socialIcons")} 
                        />
                    </div><br />
                    <div className="">
                        <label htmlFor="availableSlots" className="text-sm">Available Slots</label>
                        <input id="availableSlots" type="text" placeholder="Available Slots" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("availableSlots")} 
                        />
                    </div><br />
                    <div className="">
                        <label htmlFor="otherInfo" className="text-sm">Other Info</label>
                        <textarea id="otherInfo" placeholder="Other Info" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                                {...register("otherInfo")} 
                        />
                    </div><br />                    
                    <div className="">
                        <button className="btn" type="submit">Submit</button>
                    </div>
                </div>

             </fieldset>
             
         </form>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
      </div>
    );
};

export default Banner;