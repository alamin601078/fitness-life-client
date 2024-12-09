import { FaHome, FaTrademark } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdClass } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const AdminManu = () => {
    return (
        <>
           <li>
                            <NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/allnewslatersubscribers">
                            <RiAddCircleFill />
                                All Newsletter subscribers:</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/alltrainers">
                            <FaTrademark />
                                All Trainers</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/appliedtraner">
                            <FaTrademark />
                                Applied Trainer</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/balance">
                            <FaHandHoldingDollar />
                                Balance</NavLink>
                        </li> 
                        <li>
                            <NavLink to="/dashboard/addnewclass">
                            <MdClass />
                                Add new Class</NavLink>
                        </li>  
        </>
    );
};

export default AdminManu;