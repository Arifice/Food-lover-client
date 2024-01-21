/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";
// import axios from "axios";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const axiosSecure=useAxiosSecure();
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState();

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        signOut(auth);
    }
    const googleProvider=new GoogleAuthProvider();
    const signWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const githubProvider=new GithubAuthProvider();
    const signWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const facebookProvider=new FacebookAuthProvider();
    const signWithFacebook=()=>{
        setLoading(true);
        return signInWithPopup(auth,facebookProvider);
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            // const userEmail=currentUser? currentUser.email : user?.email;
            // const loggedInUser={email:userEmail};
            setUser(currentUser);            
            setLoading(false);
            console.log({currentUser,loading});
            // if(currentUser){                
            //     axiosSecure.post('/jwt',loggedInUser)
            //         .then(res=>{
            //             console.log(res.data);
            //         })
            // }
            // else{
            //     // axios.post('https://b8a11-server-side-arifice.vercel.app/logout',loggedInUser)
            //     //     .then(res=>{
            //     //         console.log(res.data);
            //     //     })
            // }
           
        })
        return ()=>{
            unsubscribe();
        }
    },[axiosSecure,loading])

    const authInfo={
        loading,
        createUser,
        login,
        user,
        logOut,
        signWithGoogle,
        signWithGithub,
        signWithFacebook
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;