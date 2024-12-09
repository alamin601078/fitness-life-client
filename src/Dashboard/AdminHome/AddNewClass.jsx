import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { axiosPublic } from "../../Hooks/useAxiosPublic";


const AddNewClass = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const{ user} = useAuth()
    const email = user?.email        
    const onSubmit = (data) => {
        console.log(data)
        const appllydata = { ...data,email: email}
        axiosPublic.post('/addclasses', appllydata)
        .then(res => {
            if (res.data.insertedId) {
                console.log('user added to the database')
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                
            }
        })
    }

    return (
<div className="flex justify-center items-center ">
<form onSubmit={handleSubmit(onSubmit)}  className="container flex flex-col w-full max-w-md p-4 rounded-md shadow sm:p-8 space-y-12 bg-gray-50 bg-opacity-05 "
         >
            <p className="font-medium text-lg text-center mt-3 ">Your New Classes Inormation</p>
             <fieldset className="flex justify-center items-center gap-6 p-6 rounded-md shadow-sm ">
         
        
                <div className="gap-4 col-span-full lg:col-span-3">
                    <div className="">
                        <label htmlFor="trainerName" className="text-sm">Classes Name</label>
                        <input id="trainerName" type="text" placeholder="Classes Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("trainerName", { required: true })} 
                        />
                        {errors.trainerName && <span className="text-red-500">This field is required</span>}
                    </div><br />
                    <div className="">
                        <label htmlFor="profileImage" className="text-sm">Image</label>
                        <input id="profileImage" type="text" placeholder=" Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("profileImage")}  
                        />
                    </div><br />
                    <div className="">
                        <label htmlFor="yearsOfExperience" className="text-sm">Details</label>
                        <input id="yearsOfExperience" type="text" placeholder="Details" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                            {...register("yearsOfExperience")} 
                        />
                    </div> <br />
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
</div>
    );
};

export default AddNewClass;