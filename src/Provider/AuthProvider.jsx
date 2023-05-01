import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.confiq';
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    updateProfile,
    signInWithEmailAndPassword,
  } from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
         
        });
        return () => {
          return unsubscribe();
        };
      }, []);

// console.log(user);
    const createUser = (email, password) => {
       
        return createUserWithEmailAndPassword(auth, email, password);
      };
      const updateUserData = (user, name,photo) => {
        updateProfile(user, {
          displayName: name,
          photoURL:photo,
        })
          .then(() => {
            alert("Successfull");
          })
          .catch((error) => {
            console.log(error.message);
          });
      };
      const login = (email, password) => {
       
        return signInWithEmailAndPassword(auth, email, password);
      };
      const logout = () => {
        return signOut(auth);
      };
    const authInfo={createUser,user,logout,updateUserData,login};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;