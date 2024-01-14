/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ServiceCard = ({servic}) => {
    const {title,price,img,description,_id}=servic;
    return (
            <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <p className="text-xl font-semibold">Price : {price} $</p>
                <p className="text-justify text-sm">{description}</p>
                <div className="card-actions">
                <Link to={`/showdetails/${_id}`}><button className="btn btn-secondary mt-4 text-3xl">Show Details</button></Link>
               <Link to={`/orderform/${_id}`}> <button  className="btn btn-warning mt-4 text-3xl">Order Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;