import { NavLink, Outlet } from "react-router-dom";
import { SiTrainerroad } from "react-icons/si";
import {   FaHome, FaTrademark,  FaUserNurse,  } from "react-icons/fa";
import { MdClass, MdRecommend } from "react-icons/md";
import { BsPersonCheckFill } from "react-icons/bs";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { RiAddCircleFill } from "react-icons/ri";
import useAdmin from "../Hooks/useAdmin";
import useRole from "../Hooks/useRole";
import AdminManu from "./AdminHome/AdminManu";
import TrainerManu from "./Trainer/TrainerManu";
import MemberManu from "./Member/MemberManu";
// import useAdmin from "../Hooks/useAdmin";
// import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
    // const {isAdmin} = useAdmin();
    const [ role, loading ] = useRole();
    // const { isAdmin, loading } = useAdmin();
    // const isAdmin = true;
    console.log(role)
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-opacity-30  bg-black">
            <ul className="menu p-4">
                
                { role ==='admin'&& <AdminManu/>}
                { role ==='trainer'&& <TrainerManu/>}
                { role ==='member'&& <MemberManu/>}
              
                {/* shared nav links */}
                <div className="divider"></div>
                <li>
                    <NavLink to="/">
                        <FaHome></FaHome>
                        Home</NavLink>
                </li>
                <li>
                    <NavLink to="/alltrainerpages">
                    <SiTrainerroad />
                        All Trainers</NavLink>
                </li>
                <li>
                    <NavLink to="/allclassespages">
                    <MdClass/>
                        All Classes</NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;