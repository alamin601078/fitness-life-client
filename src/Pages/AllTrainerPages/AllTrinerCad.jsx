import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import { Link } from "react-router-dom";
   
  export function AllTrinerCad() {

    const [cadTrainer, setCadTrainer]= useState([])
    useEffect(() =>{
    
      axiosPublic.get(`/allTrainer`)
      .then(res =>{
          // console.log(res.data)
          setCadTrainer(res.data)
      })
    })
  // console.log(cadTrainer)
    return (
      <div className="flex flex-wrap justify-center">
      
      {
        
    
        cadTrainer?.map( (cad) => <Card key={cad._id} className="mt-6 w-full sm:w-96 mx-4">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={cad.profileImage }
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
            Trainer name :{cad.trainerName}
            </Typography>
            <Typography>
            Years of Experience : {cad.yearsOfExperience}
            </Typography>
             <Typography>
             Social icons : {cad.socialIcons}
            </Typography>
              <Typography>
            Available slots : {cad.availableSlots}
            </Typography>
               <Typography>
               Other info : {cad.otherInfo}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link to={`/trainerdetails/${cad._id}`} className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Know more</Link>
          </CardFooter>
        </Card>)
      }
      </div>
    
    );
  }