/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
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
        signOut(auth)
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
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('current user in the on authstate change',currentUser)
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;