import React, { createContext } from 'react';


export const InfoContext = createContext()

const AuthContext = (children ) => {


    const contextData = {





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
