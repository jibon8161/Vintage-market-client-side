import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
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



    const contextData = {

        user,
        createUser,
        updateProfileInfo,
        signInWithEmail



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
