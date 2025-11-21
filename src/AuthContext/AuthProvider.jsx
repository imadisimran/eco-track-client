import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null)

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    const singUp=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])

    const authInfo={
        googleSignIn,
        logOut,
        singUp,
        signIn,
        user,
        loading

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;