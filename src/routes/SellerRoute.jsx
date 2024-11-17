import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/root/Loading";
import useAuth from "../hook/useAuth";
import UserData from "../hook/UserData";


export default function SellerRoute({ children }) {

     const { user, loading } = useAuth();
     const userInfo = UserData();
     const location = useLocation();
     console.log(userInfo.role);
     if (loading || !userInfo.role) {

          return <Loading></Loading>
     }
     if (user && userInfo.role === 'seller') {
          return children;
     }

     return <Navigate to="/" state={{ from: location }} replace></Navigate>
}
