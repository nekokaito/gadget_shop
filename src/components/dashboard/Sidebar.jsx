import { Link, NavLink } from "react-router-dom";
import { BiBarChart } from "react-icons/bi"
import { BiCartAlt } from "react-icons/bi";
import { BiCartAdd } from "react-icons/bi";
import { BiHome } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import UserData from "../../hook/UserData";


const Sidebar = () => {




     const data = UserData();

     const sellerRoute = [
          {
               id: 1,
               route: "/dashboard/my-products",
               icon: <BiCartAlt />
          },
          {
               id: 2,
               route: "/dashboard/add-product",
               icon: <BiCartAdd />

          }
     ]




     console.log(data)
     console.log(data.role)



     return (
          <div className="bg-gray-200 border-r-2 border black min-h-screen">
               <h1 className="text-3xl font-bold mt-6 ml-5">Gadget Shop</h1>
               <ul className="flex mx-5 mt-10 flex-col gap-2">
                    <li>
                         <NavLink to="/dashboard/overview">

                              <button className="btn w-full"> <BiBarChart /> Overview</button>

                         </NavLink>
                    </li>
                    {
                         data.role === 'seller' ? (<>
                              <li>
                                   <NavLink to="/dashboard/myproducts">
                                        <button className="btn w-full"><BiCartAlt />My Products</button>
                                   </NavLink>
                              </li>
                              <li>
                                   <NavLink to="/dashboard/addproduct"><button className="btn w-full"><BiCartAdd />My Products</button></NavLink>
                              </li></>) : ('Null')
                    }


                    <li>
                         <Link to="/"><button className="btn w-full"><BiHome />Return Home</button></Link>
                    </li>
                    <li>
                         <button className="btn w-full"> <MdLogout /> Logout</button>
                    </li>

               </ul>
          </div>
     );
};

export default Sidebar;