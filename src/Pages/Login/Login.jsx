import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginpic from '../../assets/images/login/login.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaFacebook, FaGithub, FaGooglePlus } from "react-icons/fa";
import axios from 'axios';

const Login = () => {
    const {login,signWithGoogle,signWithGithub,signWithFacebook}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;        
        const email=form.email.value;
        const password=form.password.value;
        const user={email,password};
        console.log('signup user',user);

        login(email,password)
            .then(result=>{
                const loggedInuser=result.user;
                console.log(loggedInuser); 
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login",
                    icon: "success"
                  });
                 
                //    access token
                
                const user={email};
                axios.post(`http://localhost:5000/jwt`,user,{
                   withCredentials:true
                })
                    .then(result=>{
                        console.log('jwt',result.data);
                        if(result.data.success){
                            navigate(location?.state? location?.state:'/'); 
                        }
                    })  
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: `Error`,
                    text: `${error.message}`,
                    icon: "error"
                  });   
            })
    }

    const handleGoogle=()=>{
        signWithGoogle()
            .then(result=>{
                console.log(result);
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login",
                    icon: "success"
                  });
                //  navigate(location?.state? location?.state:'/');  
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: `Error`,
                    text: `${error.message}`,
                    icon: "error"
                  });   
            })
    }
    const handleGithub=()=>{
        signWithGithub()
            .then(result=>{
                console.log(result);
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login",
                    icon: "success"
                  });
                 navigate(location?.state? location?.state:'/');  
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: `Error`,
                    text: `${error.message}`,
                    icon: "error"
                  });   
            })
    }

    const handleFacebook=()=>{
        signWithFacebook()
            .then(result=>{
                console.log(result);                
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully login",
                    icon: "success"
                  });
                //   access
                 navigate(location?.state? location?.state:'/');  
                // 
            })
            .catch(error=>{
                console.log(error);
                Swal.fire({
                    title: `Error`,
                    text: `${error.message}`,
                    icon: "error"
                  });   
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row">
            <div className="text-center flex-1 w-full lg:text-left">           
                <img src={loginpic} alt="" />
            </div>
            <div className="card w-full flex-1 shrink-0  max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-3xl text-center mt-10 font-bold">Login  Your account</h1>
                <hr className='border-2 border-green-600 my-5' />
                <div className='flex justify-center gap-10'>
                    <button onClick={handleGoogle} className='btn  btn-circle text-5xl  text-success'><FaGooglePlus></FaGooglePlus></button>
                    <button onClick={handleGithub} className='btn  btn-circle text-5xl text-warning'><FaGithub></FaGithub></button>
                    <button onClick={handleFacebook} className='btn  btn-circle text-5xl text-secondary'><FaFacebook/></button>                 
                </div>
                <form onSubmit={handleLogin} className="card-body ">               
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Email</span>
                    </label>
                    <input type="email" placeholder="email" name='email' className="input text-3xl input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-3xl">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input text-3xl input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt text-xl link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <input type='submit' value={'Login'} className="btn text-3xl btn-success rounded-full "/>
                    </div>
                </form> 
                <h1 className="text-center text-xl pb-6">Have no account? Please <Link to={'/signup'} className='text-red-600 font-semibold underline'>Sign up</Link></h1>              
            </div>
           
        </div>
       
        </div>
    );
};

export default Login;