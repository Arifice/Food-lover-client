import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.png'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
    const navigate=useNavigate();
    const location=useLocation();
    const handleSignUp=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        const userInfo={name,photo,email,password};
        console.log('signup user',userInfo);

        createUser(email,password)
            .then(result=>{
                console.log(result); 
                Swal.fire({
                    title: "Good job!",
                    text: "You have successflly sign",
                    icon: "success"
                  });                  
                  sendEmailVerification(result.user)
                        .then(result=>{
                            console.log(result.user);
                            Swal.fire({
                                icon: "success",
                                title: "Yes...",
                                text: "Please check & verify your email",                        
                            }) 
                            
                        })
                        .catch(error=>{
                            console.log(error);
                        })

                  updateProfile(result.user,{
                    displayName:name,
                    photoURL:photo
                    })
                    .then(result=>{
                        console.log(result);
                        Swal.fire({
                            icon: "success",
                            title: "Yes...",
                            text: "Profile updated",                        
                        });
                    })
                    .then(error=>{
                        console.log(error)
                    }) 

                const user={email};
                axiosSecure.post(`/jwt`,user) 
                    .then(res=>{
                        if(res.data.success){
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
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col-reverse lg:flex-row">
            <div className="text-center lg:text-left">           
                <img src={login} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up!</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="photo Url" name='photo' className="input input-bordered"  />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                
                </div>
                <div className="form-control mt-6">
                <input type='submit' value={'Sign Up'} className="btn btn-secondary rounded-full"/>
                </div>                
            </form>
                <p className='text-center pb-6'>Already have an account? Please <Link to={'/login'} className='text-red-600 underline font-semibold'>Login</Link></p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;