import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

export const InfoContext = createContext()
const auth = getAuth(app)
const AuthContext = ({ children }) => {

    const [user, setUser] = useState()
    const [loader, setLoader] = useState(true)


    const createUser = (email, pass) => {

        // setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)



    }

    const updateProfileInfo = (name, url) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: url

        })
    }



    const contextData = {

        user: 'jibon',
        createUser,
        updateProfileInfo,



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
