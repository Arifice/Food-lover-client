import { useEffect, useState,   } from "react";

import MyServiceCard from "./MyServiceCard";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";



const MyServices = () => {
    const {user}=useAuth();
    const navigate=useNavigate();
    const axiosSecure=useAxiosSecure();
    const [myservices,setMyservices]=useState([]);
    const url=`/services/user/${user?.email}`    
    useEffect(()=>{
            axiosSecure.get(url)
                .then(res=>{
                    setMyservices(res.data);
                })
    },[url,axiosSecure])

    const handleDelete=(id)=>{
        console.log(id);

        fetch(`https://b8a11-server-side-arifice.vercel.app/services/${id}`,{
                method:'DELETE',               
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        title: "Success",
                        text: "successfully added your service",
                        icon: "success"
                    });
                    const remaining=myservices.filter(service=>service._id!==id);
                    setMyservices(remaining);
                    navigate('/myservices');
                }
                
            })
    }   
    console.log('myservices',myservices);
    return (
        <div className="max-w-7xl mx-auto bg-base-100">
            <h1 className="text-5xl text-center">My Services : {myservices.length} </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    myservices.map(service=><MyServiceCard key={service._id}
                         service={service}
                         handleDelete={handleDelete}                        
                    
                    ></MyServiceCard>)
                }
            </div>            
        </div>
    );
};

export default MyServices;