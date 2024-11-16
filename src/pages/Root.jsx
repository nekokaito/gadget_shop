import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";
import { Toaster } from "react-hot-toast";


const Root = () => {
     return (
          <div>
               <NavBar></NavBar>
               <div className=" min-h-screen">
                    <Outlet></Outlet>
               </div>

               <Footer></Footer>
               <div><Toaster /></div>
          </div>
     );
};

export default Root;