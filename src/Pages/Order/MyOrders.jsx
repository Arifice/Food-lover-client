import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyOrdersCard from "./MyOrdersCard";
import Swal from "sweetalert2";
import axios from "axios";


const MyOrders = () => {
    const {user}=useContext(AuthContext)
    const url=`http://localhost:5000/order?email=${user?.email}`;
    const [myorders,setMyOrders]=useState([]);
    useEffect(()=>{
        axios.get(url,{withCredentials:true})
            .then(res=>{
                setMyOrders(res.data);
            })
        // fetch(url)
        //     .then(res=>res.json())
        //     .then(data=>{
        //         console.log(data);
        //         setMyOrders(data);
        //     })
    },[url])

const handleDelete=(id)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) =>{
        if (result.isConfirmed) {

            fetch(`http://localhost:5000/order/${id}`,{
                method:'DELETE'
            })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    if(data.deletedCount>0){
                        const remaining=myorders.filter(booking=>booking._id!==id);
                        setMyOrders(remaining);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your order has been deleted.",
                            icon: "success"
                        });
                    }
                })
          
        }
      } )
}

const handleConfirm=(id)=>{
        fetch(`http://localhost:5000/order/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify({status: 'confirm'})

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
            const remaining=myorders.filter(booking=>booking._id!==id);
            const updated=myorders.find(booking=>booking._id===id);
            updated.status='confirm';
            const newMyorders=[updated, ...remaining];
            setMyOrders(newMyorders);

            Swal.fire({
                title: "Success",
                text: "Confirmation successful",
                icon: "success"
            });
        }
        })
}

    return (
        <div>
            <h1 className="lg:text-5xl text-2xl text-center my-10 text-orange-600 font-bold">Total orders : {myorders.length}</h1>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr className="lg:text-3xl lg:font-bold text-2xl font-semibold">
                        <th>Delete </th>
                        <th>Food Info</th>
                        <th>Customaer Info</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>                        
                        <th>Total Price</th>                        
                        <th>Delivery Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody className="lg:text-2xl">
                        {
                            myorders.map(myorder=><MyOrdersCard key={myorder._id}
                                 myorder={myorder}
                                 handleDelete={handleDelete}
                                 handleConfirm={handleConfirm}
                                 ></MyOrdersCard>)
                        }
                    </tbody> 
                    
                </table>               
            </div>
        </div>
    );
};

export default MyOrders;