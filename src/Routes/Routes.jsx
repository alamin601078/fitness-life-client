import {
    createBrowserRouter,

  } from "react-router-dom";
import Home from "../Component/Home/Home";
import Login from "../Component/User/Login";
import Register from "../Component/User/Register";
import Main from './Main';
import Eorrpages from "../Eorrpages/Eorrpages";
import AllTrainerPages from "../Component/AllTranerPages/AllTrainerPages";
import AllClassesPages from "../Component/AllClassesPages/AllClassesPages";
import Community from "../Component/Community/Community";
// import UserProfile from "../Component/UserProfile/UserProfile";
import Dashboard from "../Dashboard/Dashboard";
// import PrivateRoute from "./PrivateRoute";
import Profile from "../Dashboard/Shared/Profile";
import TrainerDetails from "../Pages/AllTrainerPages/TrainerDetails";
import TrainerBooked from "../Pages/AllTrainerPages/TrainerBooked/TrainerBooked";
import PaymentPage from "../Pages/PaymentPage/PaymentPage";
import ForumPages from "../Component/ForumPages/ForumPages";
import AdminHome from "../Dashboard/AdminHome/AdminHome";
import AllNewsLeaters from "../Dashboard/AdminHome/AllNewsLeaters";
import AllTrainers from './../Dashboard/AdminHome/AllTrainers';
import AppliedTrainer from "../Dashboard/AdminHome/AppliedTrainer";
import Balance from "../Dashboard/AdminHome/Balance";
import AddNewClass from "../Dashboard/AdminHome/AddNewClass";
import UserHome from "../Dashboard/Member/UserHome";
import Activity from "../Dashboard/Member/Activity";
import Recomended from "../Dashboard/Member/Recomended";






const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Eorrpages/>,
      children:[
        {
            path:'/',
            element: <Home/>
        },
        {
            path: 'login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
        {
            path: 'alltrainerpages',
            element: <AllTrainerPages/>
        },
        {
            path: '/allclassespages',
            element: <AllClassesPages/>
        },
         {
            path: 'community',
            element: <Community/>
        },
        {
            path: '/userprofile',
            element: <Profile/>
        },
         {
            path: `/trainerdetails/:_id`,
            element: <TrainerDetails/>
        },
         {
            path: `/trainerbookedpages`,
            element: <TrainerBooked/>
        },
        {
            path: '/pamentpages',
            element: <PaymentPage/>
        },
         {
            path: '/forumpages',
            element: <ForumPages/>
        }, 
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // normal user routes
            {
              path: 'userprofile',
              element: <Profile></Profile>
            },
            {
              path: '/dashboard/userHome',
              element: <UserHome></UserHome>
            },
            {
              path: '/dashboard/history',
              element: <Activity></Activity>
            },
            {
              path: '/dashboard/review',
              element: <Recomended></Recomended>
            },
             {
              path: '/dashboard/adminHome',
              element: <AdminHome></AdminHome>
            },
            {
              path: '/dashboard/allnewslatersubscribers',
              element: <AllNewsLeaters></AllNewsLeaters>
            },
            {
              path: '/dashboard/alltrainers',
              element: <AllTrainers></AllTrainers>
            },
            {
              path: '/dashboard/appliedtraner',
              element: <AppliedTrainer></AppliedTrainer>
            },
            {
              path: '/dashboard/balance',
              element: <Balance></Balance>
            },
            {
              path: '/dashboard/addnewclass',
              element: <AddNewClass></AddNewClass>
            },
          
    
        
    
          ]

    },
  ]);

export default Router;