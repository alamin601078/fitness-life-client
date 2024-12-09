import { BsPersonCheckFill } from "react-icons/bs";
import { FaHome, FaUserNurse } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import { NavLink } from "react-router-dom";


const TrainerManu = () => {
    return (
    <>
     <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/history">
                        <BsPersonCheckFill />
                            Activity Log page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/userprofile">
                        <FaUserNurse />
                            Profile Page </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                         <MdRecommend />
                            Recommended Classes Page</NavLink>
                    </li>
    </>
    );
};

export default TrainerManu;