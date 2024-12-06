import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";

export const authContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    return signOut(auth);
  };

  const updateUserProfile  = (updatedData) =>{
    // setLoading(true)
   return updateProfile(auth.currentUser, updatedData)
}


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInformation = {
    handleRegister,
    handleLogin,
    googleLogin,
    updateUserProfile,
    user,
    setUser,
    handleLogout,
  };

  return (
    <div>
      <authContext.Provider value={authInformation}>
        {children}
      </authContext.Provider>
    </div>
  );
};

export default AuthProvider;
