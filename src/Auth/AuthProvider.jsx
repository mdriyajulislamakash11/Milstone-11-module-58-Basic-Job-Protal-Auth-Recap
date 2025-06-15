import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // crate user: 
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Google Provider
  const signInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }
  // Github Provider
  const signInWithGihb = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider)
  }

  // Facebook Provider
  const signInWithFacebook = () => {
    setLoading(true)
    return signInWithPopup(auth, facebookProvider)
  }

  // Log In user: 
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  };

  // Sign Out: 
  const logOut = () => {
    setLoading(true);
    signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged
      (auth,
      (currentUser) => {
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
      });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGihb,
    signInWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
