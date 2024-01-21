import { Link } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const MyServiceCard = ({service,handleDelete}) => {
    
    // eslint-disable-next-line react/prop-types
    const {customerName,title,img,price,quantity,date,description,_id}=service;
    
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-left">
                <h2 className="card-title lg:text-3xl text-2xl font-bold">{title}</h2>
                <h2 className="card-title lg:text-3xl text-xl font-bold">Added by: {customerName}</h2>
                <div className=" space-y-2 text-left">
                    <p className="text-xl font-semibold">Price :$ {price} </p>
                    <p className="text-xl font-semibold">Quantity :{quantity} </p>
                    <p className="text-xl font-semibold">Delivery date : {date} </p>       
                               
                    <p className="text-justify text-sm">Description: {description}</p>
                </div>
                <div className="card-actions">   
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-outline">Delete</button>    
                    <Link to={`/updateservice/${_id}`}><button  className="btn btn-ghost btn-outline">Update</button>    </Link>
                      

                </div>
            </div>
    </div>
);
};

export default MyServiceCard;