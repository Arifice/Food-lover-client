

import useServices from "../../Hooks/useServices";
import ServiceCard from "../Services/ServiceCard";
import {  useState } from "react";



const AllServices = () => {
    // const axiosSecure=useAxiosSecure();
    const [asc,setAsc]=useState(true);
    const [search,setSearch]=useState('');
    console.log({asc});
    const services =useServices(asc,search);
    
    
   
    console.log(asc);
    console.log(services);

    const handleSearch=(e)=>{
        e.preventDefault();
        const searchText=e.target.search.value;
        console.log(searchText);
        setSearch(searchText);

    }

    

    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <div className="hero mt-10 rounded-xl h-[350px] lg:h-[600px]" style={{backgroundImage: 'url(https://i.postimg.cc/HxtFkB9h/service.jpg)'}}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Hey Teeny, <br></br> Dine with us  and <br></br>get <span className="text-orange-600">25%</span> discount on your bill! </h1>
                        
                        
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-5xl font-bold text-secondary mt-10 text-center">Enjoy Our Services</h1>

            <div className="flex justify-center my-10">

                <button onClick={()=>setAsc(!asc)} className="btn text-3xl  btn-warning">{asc?'Price : High to low':'Price : Low to high'}</button>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleSearch} >
                    <input type="text" name="search" className="text-2xl p-2  border-2 border-warning " placeholder="search" />
                    <input type="submit" className="text-2xl btn btn-secondary" value={'search'} />
                </form>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    services.map(service=><ServiceCard key={service._id} servic={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;