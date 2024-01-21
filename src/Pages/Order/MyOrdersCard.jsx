/* eslint-disable react/prop-types */





const MyOrdersCard = ({myorder,handleDelete,handleConfirm}) => {
   
    
   
    const {customerName,foodName,img,email,price,qunatity,date,description,_id,status}=myorder;
    
    
    return (
            <tr>
                <td>
                   <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-warning lg:text-3xl">X</button>
                </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                    <div className="rounded-lg w-12 h-12 lg:w-16 lg:h-16">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold lg:text-2xl">{foodName}</div>
                    <div className="text-sm  text-success">{description.slice(0,20)}</div>
                    </div>
                </div>
            </td>
            <td>
               <span className="lg:text-2xl lg:font-bold">{customerName}</span>
                <br/>
                {email}
            </td>
            <td>{price}</td>
            <td>{qunatity} Dish</td>
            <td>{parseInt(qunatity)*parseInt(price)} $</td>
            <td>{date}</td>
            <td>
                {
                    status=='confirm'? <span className="text-green-500">Confirmed</span>
                    :
                    <button onClick={()=>handleConfirm(_id)} className="btn lg:text-2xl btn-ghost btn-xs">Please confirm</button>
                }
            </td>
        </tr>
    );
};

export default MyOrdersCard;