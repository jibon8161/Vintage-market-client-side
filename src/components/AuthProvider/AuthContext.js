import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

export const InfoContext = createContext()
const auth = getAuth(app)
const AuthContext = ({ children }) => {

    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)


    const createUser = (email, pass) => {


        return createUserWithEmailAndPassword(auth, email, pass)



    }

    const updateProfileInfo = (name, url) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url

        })
    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)





        })

        return () => unSubscribe()


    }, [])


    const signInWithEmail = (email, pass) => {

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



    const contextData = {

        user,
        createUser,
        updateProfileInfo,
        signInWithEmail,
        googleSignIn,
        logOut



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
