/* eslint-disable react/no-unescaped-entities */

import { useNavigate } from 'react-router-dom';
import image2 from '../../assets/images/galary/14.jpg'
const About = () => {
    const navigate=useNavigate();
    const handleMoreInfo=()=>{
         navigate('/aboutus');
    }
    return (
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
                        <button onClick={handleMoreInfo} className="btn btn-secondary m-10 lg:text-3xl btn-outline">Get More Info</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;