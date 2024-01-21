import axios from "axios";
import { useEffect } from "react";
// import useAuth from "./useAuth";


 const axiosSecure=axios.create({
    baseURL:'https://b8a11-server-side-arifice.vercel.app',
    withCredentials:true,
    
})


const useAxiosSecure = () => {
        // const{logOut}=useAuth();
    useEffect(()=>{
        axiosSecure.interceptors.response.use(res=>{
            return res;
        }, error=>{
            console.log('error tracked int the interceptor',error.response);
            if(error.response.status=== 401 || error.response.status=== 403){
                console.log('Log out the user');               
                // logOut()
                //     .then()
                //     .catch();
            }
        }
        )
        
    },[])

    return axiosSecure;
   
};

export default useAxiosSecure;