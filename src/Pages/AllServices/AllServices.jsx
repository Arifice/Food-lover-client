import { useLoaderData } from "react-router-dom";
import ServiceCard from "../Services/ServiceCard";



const AllServices = () => {
    const services=useLoaderData();


    // const [serchServices,setSerchservices]=useState(services);
    // useEffect(()=>{
    //     fetch(``)
    // },[])
    

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    services.map(service=><ServiceCard key={service._id} servic={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;