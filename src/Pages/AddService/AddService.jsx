import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddService = () => {
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleAddService=(e)=>{
        e.preventDefault();
        const form=e.target;
        const customerName=form.customerName.value;
        const email=form.email.value;
        const title=form.title.value;
        const price=form.price.value;
        const date=form.date.value;
        const description=form.description.value;
        const img=form.img.value;
        const address=form.address.value;
        const newService={customerName,email,title,img,price,date,description,address};
        console.log('add service',newService);

        fetch('http://localhost:5000/services',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(newService)
            })
            .then(res=>res.json)
            .then(data=>{
                console.log(data);
                Swal.fire({
                    title: "Success",
                    text: "successfully added your service",
                    icon: "success"
                });
                navigate('/allservices');
            })
    }

    return (
        <div className="max-7xl pt-32 mx-auto bg-base-200">
            <h1 className="text-5xl text-center font-bold">Add Service</h1>
            <div className=" mt-20 flex justify-center ">
               
                <div className="card  w-2/3  shadow-2xl bg-base-100">
                <form onSubmit={handleAddService} className="card-body">
                   <div className="grid lg:grid-cols-2 gap-6 grid-cols-1">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Customer Name </span>
                            </label>
                            <input type="text" name="customerName" defaultValue={user?.displayName} placeholder="customerName" className="input text-xl lg:text-2xl input-bordered" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Email</span>
                            </label>
                            <input type="email" name="email" disabled defaultValue={user?.email} placeholder="email" className="input  text-xl lg:text-2xl input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Food Name</span>
                            </label>
                            <input type="text" name="title" placeholder="password" className="input text-xl lg:text-2xl input-bordered" required />                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Food Image URL</span>
                            </label>
                            <input type="text" name="img" placeholder="URL" className="input text-xl lg:text-2xl input-bordered"  />                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Price" className="input input-bordered text-xl lg:text-2xl" required />                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Delivery Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Delivery Date" className="input text-xl lg:text-2xl input-bordered" required />                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Description</span>
                            </label>
                            <textarea type="text" name="description" placeholder="description" className="input text-xl lg:text-2xl input-bordered"  />                        
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl lg:text-2xl">Address</span>
                            </label>
                            <textarea type="text" name="address" placeholder="Address" className="input text-xl lg:text-2xl input-bordered"  />                        
                        </div>
                   </div>
                    <div className="form-control mt-6">
                    <input  type="submit" value={'Add Service'} className="btn text-xl lg:text-2xl btn-secondary" />
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;