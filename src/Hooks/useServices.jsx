import { useEffect, useState } from "react";
import useAxiosSecure  from "./useAxiosSecure";

const useServices = (asc,search) => {
    const [services,setServices]=useState([]);
    const axiosSecure=useAxiosSecure();
    useEffect(()=>{
       axiosSecure.get(`/services?sort=${asc?'asc':'desc'}&search=${search}`)
            .then(res=>{
                setServices(res.data);
            })
    },[axiosSecure,asc,search])
   return services;
};

export default useServices;