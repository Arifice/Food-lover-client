import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../MainLayout/MainLaout";
import Errorepage from "../Pages/ErrorePage/Errorepage";
import Home from "../Pages/HomePage/Home";
import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLaout></MainLaout>,
      errorElement:<Errorepage></Errorepage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);
  export default router;