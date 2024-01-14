import { Link, useLoaderData } from "react-router-dom";

const ShowDtails = () => {
    const servic=useLoaderData();
    const {title,price,img,description,_id}=servic;
    return (
            <div className="card max-w-7xl mx-auto bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl lg:text-5xl font-bold">{title}</h2>
                <p className="lg:text-3xl text-2xl font-semibold">Price : {price} $</p>
                <p className="text-justify lg:text-2xl text-green-600 ">{description}</p>
                <div className="card-actions">               
               <Link to={`/orderform/${_id}`}> <button  className="btn btn-warning mt-4 text-3xl">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ShowDtails;