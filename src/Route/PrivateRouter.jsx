import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <progress className="progress w-52"></progress>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRouter;