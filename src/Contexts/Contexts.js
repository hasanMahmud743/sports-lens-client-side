import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase_Config/Firebse.config';




export const myContext = createContext()
const auth = getAuth(app)

const provider = new GoogleAuthProvider();

const Contexts = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoader] = useState(true)

    const githubSignIn = (provider) =>{
        return signInWithPopup(auth, provider)
    }
 

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth, provider)
    }
    
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    const signInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (obj)=>{
        setLoader(true)
        return updateProfile(auth.currentUser, obj )
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
                setUser(currentUser)
                setLoader(false)
        })
        return () => unsubscribe()
    },[])


    return (
       <myContext.Provider value={{user, loading,logOut, createUser, githubSignIn, signInUser, profileUpdate, googleSignIn}}>
        {children}
       </myContext.Provider>
    );
};

export default Contexts;