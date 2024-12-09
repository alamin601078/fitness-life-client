import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Navber = () => {
    const { user, logOut } = useAuth();
    // console.log()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltrainerpages">All Trainer Page</Link></li>
        <li><Link to="/allclassespages">All Classes page</Link></li>
        <li><Link to="/forumpages">Forum page</Link></li>
        {/* <li><Link to="/community">Community</Link></li> */}
     {
      user? <li><Link to="/dashboard">Dashboard</Link></li>
      :
      <li><Link to="/login">Login</Link></li>
     }
      

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-30  bg-black rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <img className="w-4" src="../../../public/65_f.jpg"  alt="" />
                <a className="btn btn-ghost normal-case text-xl">Fitness Life</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar navbar-end">
  <div className="flex-none gap-2">
    <div className="form-control hidden lg:flex">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-black" />
    </div>
    <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img src={user?.photoURL} />
          {/* <img alt="Tailwind CSS Navbar component" src={user ?.photoURL}  /> */}
        </div>
      </div>
       {
        user ? <>
         <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-opacity-30  bg-black rounded-box w-52">
        <li>
          <Link to="userprofile" className="justify-between">
            Profile
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li>
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
      
        </li> 
      </ul>
        </>:<>
        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-opacity-30  bg-black rounded-box w-52"> 
        <li>
          <Link to="/login" className="btn btn-ghost">Login</Link>
      
        </li>
      </ul>
        </>
       }
     
    </div>
  </div>
            </div>
        </div>
    );
};

export default Navber;