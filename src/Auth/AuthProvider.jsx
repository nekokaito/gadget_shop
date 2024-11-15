import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase/firebase";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);



     // Email and Password Reg

     const createUser = (email, password) => {
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // Email and Password Login and Logout

     const userLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password);
     }


     // Google LogIn
     const googleLogin = () => {
          return signInWithPopup(auth, googleProvider);
     }


     // User LogOut

     const userLogout = () => {
          return signOut(auth);
     }

     // Auth Checking

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUser(currentUser);
               if (createUser){
                    axios.post(`${import.meta.BASE_URL}/authentication`,{email: currentUser.email}).then(data=>{
                         if(data.data){
                              localStorage.setItem('access-token', data?.data?.token)
                              setLoading(false);
                         }
                    });
               }
               
          });
          return () => {
               unsubscribe();
          }

     }
          , [])


     //User Auth Info

     const authInfo = {
          user,
          loading,
          createUser,
          userLogin,
          userLogout,
          googleLogin
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;