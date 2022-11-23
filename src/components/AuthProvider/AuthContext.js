import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from '../Firebase/Firebase.config';

export const InfoContext = createContext()
const auth = getAuth(app)
const AuthContext = ({ children }) => {

    const createUser = (email, pass) => {

        // setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)



    }



    const contextData = {

        user: 'jibon',
        createUser,



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
