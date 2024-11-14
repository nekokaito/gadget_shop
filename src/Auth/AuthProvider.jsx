import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = () => {

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
               setLoading(false);
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
          <div>

          </div>
     );
};

export default AuthProvider;