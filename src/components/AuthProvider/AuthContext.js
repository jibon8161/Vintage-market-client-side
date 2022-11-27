import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

export const InfoContext = createContext()
const auth = getAuth(app)
const AuthContext = ({ children }) => {

    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)
    const [mobiles, setMobiles] = useState([])
    const [advertiseproduct, setAdvertiseProduct] = useState([])

    const createUser = (email, pass) => {

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)



    }

    const updateProfileInfo = (name, url) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url

        })
    }





    const signInWithEmail = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }

    const googleSignIn = provider => {

        setLoader(true)
        return signInWithPopup(auth, provider)


    }

    const logOut = () => {


        setLoader(true)
        return signOut(auth)


    }

    const forgetPass = email => {

        setLoader(true)
        return sendPasswordResetEmail(auth, email)


    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)

            setLoader(false)



        })

        return () => unSubscribe()


    }, [])



    const contextData = {

        user,
        createUser,
        updateProfileInfo,
        signInWithEmail,
        googleSignIn,
        logOut,
        forgetPass,
        loader,
        mobiles,
        setMobiles,
        advertiseproduct, 
        setAdvertiseProduct,



    }

    return (
        <div>
            <InfoContext.Provider value={contextData}>

                {children}

            </InfoContext.Provider>
        </div>
    );
};

export default AuthContext;
