import { createBrowserRouter } from "react-router-dom";
import MainLaout from "../MainLayout/MainLaout";
import Errorepage from "../Pages/ErrorePage/Errorepage";
import Home from "../Pages/HomePage/Home";
// import Services from "../Pages/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import OrderForm from "../Pages/Order/OrderForm";
import MyOrders from "../Pages/Order/MyOrders";
import AllServices from "../Pages/AllServices/AllServices";
import AboutUs from "../Pages/AboutUs/AboutUs";
import PrivateRouter from "./PrivateRouter";
import ShowDtails from "../Components/ShoDetails/ShowDtails";
import AddService from "../Pages/AddService/AddService";
import MyServices from "../Pages/MyServices/MyServices";

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
            path:'/aboutus',
            element:<AboutUs></AboutUs>
        },
        {
          path:'/orderform/:id',
          element:<PrivateRouter><OrderForm></OrderForm></PrivateRouter>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/showdetails/:id',
          element:<ShowDtails></ShowDtails>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/myorder',
          element:<PrivateRouter><MyOrders></MyOrders></PrivateRouter>
        },
        {
          path:'/allservices',
          element:<PrivateRouter><AllServices></AllServices></PrivateRouter>,
          loader:()=>fetch('http://localhost:5000/services')
        },
        {
          path:'/addservice',
          element:<PrivateRouter><AddService></AddService></PrivateRouter>
        },
        {
          path:'/myservices',
          element:<PrivateRouter><MyServices></MyServices></PrivateRouter>
        }
      ]
    },
  ]);
  export default router;