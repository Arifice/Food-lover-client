import Marquee from 'react-fast-marquee'
import image1 from '../../assets/images/bannar/image1.jpg'
import image2 from '../../assets/images/bannar/image2.jpg'
import image3 from '../../assets/images/bannar/image3.jpg'
import image4 from '../../assets/images/bannar/image4.jpg'
import image5 from '../../assets/images/bannar/image5.jpg'
import image6 from '../../assets/images/bannar/image6.jpg'

import img1 from '../../assets/images/galary/1.png'
import img2 from '../../assets/images/galary/2.png'
import img3 from '../../assets/images/galary/3.jpg'
import img4 from '../../assets/images/galary/4.jpeg'
import img5 from '../../assets/images/galary/5.jpg'
import img6 from '../../assets/images/galary/6.jpg'
import img7 from '../../assets/images/galary/7.jpg'
import img8 from '../../assets/images/galary/8.jpg'
import img9 from '../../assets/images/galary/9.jpg'
import img10 from '../../assets/images/galary/10.jpg'
import img11 from '../../assets/images/galary/11.jpg'
import img12 from '../../assets/images/galary/12.jpg'
import img13 from '../../assets/images/galary/13.jpg'
import img14 from '../../assets/images/galary/14.jpg'
import img15 from '../../assets/images/galary/15.jpg'


const Bannar = () => {
    return (
        <div className='relative  mb-32 mt-12'>
            <div className="carousel w-full h-[350px] md:h-[400px] lg:h-[600px]">
            <div id="slide1" className="carousel-item  w-full">
                <img src={image1} className="w-full h-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12  space-y-7'>
                        <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                        <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                        
                    </div>                    
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide6" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide2" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
                
            </div> 
            <div id="slide2" className="carousel-item relative w-full">
            <img src={image2} className="w-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12 space-y-7'>
                    <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                    <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide1" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide3" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
            </div> 
            <div id="slide3" className="carousel-item relative w-full">
            <img src={image3} className="w-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12 space-y-7'>
                    <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                    <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide2" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide4" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
            </div> 
            <div id="slide4" className="carousel-item relative w-full">
            <img src={image4} className="w-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12 space-y-7'>
                    <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                    <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                        
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide3" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide5" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
            <img src={image5} className="w-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12 space-y-7'>
                    <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                    <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                       
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide4" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide6" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
            <img src={image6} className="w-full rounded-xl" />
                <div className="absolute  rounded-xl h-full flex  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='text-white pl-12 space-y-7'>                    
                        <h1 className='lg:text-6xl text-2xl mt-20 font-semibold lg:font-bold w-1/2'>The flavors of life are just a bite away.</h1>
                        <p className='text-sm lg:text-xl w-2/3'>A place where food, design, and ambiance come together to create a memorable experience.Enjoy our seasonal menu and experience the beauty of naturalness.A new way to experience food.</p>
                       
                    </div>
                </div>
                <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-1/2">
                    <a href="#slide5" className="btn lg:text-3xl btn-circle  btn-secondary ">❮</a> 
                    <a href="#slide1" className="btn lg:text-3xl btn-circle  btn-secondary">❯</a>
                </div>
               
            </div>
           
         </div>
          <div className='absolute lg:left-24 left-10 lg:-bottom-40 -bottom-20 w-5/6  shadow-2xl bg-base-200 lg:h-[250px] h-[100px] border-8 border-orange-600'>
          <Marquee speed={150} pauseOnHover className='border-8 border-white'>
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img1} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img2} alt="" />
             <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img3} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img4} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img5} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img6} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2'  src={img7} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img8} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img9} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img10} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img11} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img12} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img13} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img14} alt="" />
            <img className='lg:h-[250px] h-[100px] rounded-xl mr-2 p-2' src={img15} alt="" />
          </Marquee>
        </div>
        </div>
);
};

export default Bannar;