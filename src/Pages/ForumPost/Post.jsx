import { useEffect, useState } from "react";
import { axiosPublic } from "../../Hooks/useAxiosPublic";
import PostCad from "./PostCad";

const Post = () => {
    const [aplayTrainer, setaplayCadTrainer]= useState([])
    useEffect(() =>{
    
      axiosPublic.get(`/aplayalltrainer`)
      .then(res =>{
        //   console.log(res.data)
          setaplayCadTrainer(res.data)
      })
    })

    // console.log(aplayTrainer)
    return (
        <div>
            {
                aplayTrainer.map( (aptr) => <PostCad key={aptr._id} aptr={aptr}></PostCad>)
            }
        </div>
    );
};

export default Post;