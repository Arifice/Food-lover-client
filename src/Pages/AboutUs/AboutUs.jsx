/* eslint-disable react/no-unescaped-entities */
import Team from "../../Components/Team/Team";
import image2 from '../../assets/images/galary/14.jpg'


const AboutUs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero mt-10 rounded-xl h-[350px] lg:h-[600px]" style={{backgroundImage: 'url(https://i.postimg.cc/XvJqMfrK/how-to-inspire-the-next-generation-of-future-chefs-art-img.jpg)'}}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">                  
                        
                        
                        </div>
                    </div>
            </div>

            <div>
            <div className='mt-52 mb-12'>
            <h1 className='text-5xl text-center font-bold text-orange-500'>About Us</h1>
            <div className="hero  bg-base-100">            
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative p-4'>
                        <img src={`https://i.postimg.cc/NFfbwPwG/istockphoto-518144016-612x612.jpg`} className="w-full rounded-lg shadow-2xl" />
                        <img src={image2} className="w-1/2 border-8 border-white absolute -right-5 top-3/4 rounded-lg shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4'>                        
                        <h1 className="lg:text-5xl text-xl mt-10 mx-10 font-bold">We are qualified & of experience in this field</h1>
                        <p className='px-10 text-sm text-center text-success'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className='px-10 text-sm text-justify text-accent'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        
                    </div>
                </div>
            </div>
            
        </div>
            </div>
           
            <Team></Team>
        </div>
    );
};

export default AboutUs;