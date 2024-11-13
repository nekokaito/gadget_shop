import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Footer from "./footer/Footer";


const Root = () => {
     return (
          <div>
               <NavBar></NavBar>
               <div className=" min-h-screen">
                    <Outlet></Outlet>
               </div>

               <Footer></Footer>
          </div>
     );
};

export default Root;