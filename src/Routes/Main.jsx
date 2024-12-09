import { Outlet } from "react-router-dom";
import Navber from "../Component/User/Navber";
import { FooterWithSocialLinks } from "../Component/User/F";


const Main = () => {
    return (
        <div>
             {/* Navber  */}
             <Navber/>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-280px)] pt-24'>
              <Outlet/>
            </div>
            {/* Footer */}
            <FooterWithSocialLinks/>
        </div>
    );
};

export default Main;