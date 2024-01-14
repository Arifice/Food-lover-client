import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const OrderForm = () => {
    const service=useLoaderData();
    const navigate=useNavigate();
    const {user}=useContext(AuthContext);
    console.log(service);
    const {title,img,description,price}=service;
    const handleorderForm=(e)=>{
        e.preventDefault();
        const form=e.target;
        const customerName=form.customerName.value;
        const foodName=form.foodName.value;
        const price=form.price.value;
        const qunatity=form.qunatity.value;
        const date=form.date.value;        
        const email=form.email.value;       
        const description=form.description.value;       
        const orderinfo={customerName,foodName,img,email,price,qunatity,date,description};
        console.log('order',orderinfo);

        fetch('http://localhost:5000/order',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(orderinfo)
            })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                Swal.fire({
                    title: "Success",
                    text: "successfully added to cart",
                    icon: "success"
                });
                navigate('/myorder');

            })
    }

    

    return (
       <div className=" my-10 grid grid-cols-1">
       
       <div className="text-center  ">
               
               <figure><img className="rounded-xl mx-auto h-72 my-10 shadow-2xl p-4" src={img} alt="" /></figure>
               <h1 className="text-center lg:text-5xl text-xl font-bold my-10">{title}</h1>
           </div>
           <div className="card lg:w-2/3 w-full mx-auto shadow-2xl bg-base-100">
           <h1 className="lg:text-5xl text-3xl text-center mt-5 font-bold">Order Form</h1>
           <form onSubmit={handleorderForm} className="card-body ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Customar Name</span>
                   </label>
                   <input type="text" name="customerName" defaultValue={user?.displayName} placeholder="Name" className="input lg:text-3xl lg:font-bold input-bordered" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Customar Email</span>
                   </label>
                   <input type="email" name="email" disabled defaultValue={user?.email} placeholder="email" className="input lg:text-xl lg:font-bold input-bordered" required />
               </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Food Name</span>
                   </label>
                   <input type="text" name="foodName" disabled defaultValue={title} placeholder="food Name" className="input lg:text-3xl lg:font-bold input-bordered" required />
              </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Food Price</span>
                   </label>
                   <input type="text" name="price" disabled defaultValue={`${price} $`} placeholder="food price" className="input lg:text-3xl lg:font-bold input-bordered" required />
              </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Quantity</span>
                   </label>
                   <input type="text" defaultValue={"1"}  name="qunatity" className="input lg:text-3xl lg:font-bold input-bordered" required />
              </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Date</span>
                   </label>
                   <input type="date" name="date"  placeholder="food Name" className="input lg:text-3xl lg:font-bold input-bordered" required />
              </div>
              </div>
               <div className="form-control">
                   <label className="label">
                       <span className="label-text lg:text-3xl lg:font-bold">Description</span>
                   </label>
                   <textarea type="text" name="description" disabled defaultValue={description} className=" h-10 text-success text-justify text-sm lg:font-bold input-bordered" required />
              </div>

               <div className="form-control  mt-6">
               <input type="submit" value={'Order'} className="btn  btn-warning text-2xl font-semi uppercase text-white" />
               
               </div>
           </form>          
           </div>
       </div>
    );
};

export default OrderForm;