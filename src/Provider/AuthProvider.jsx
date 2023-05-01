import React, { createContext } from 'react';
import app from '../firebase/firebase.confiq';
import {
    getAuth,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const authInfo={createUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;