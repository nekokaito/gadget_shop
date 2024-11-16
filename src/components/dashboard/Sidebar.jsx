import { Link } from "react-router-dom";


const Sidebar = () => {
     return (
          <div className="bg-gray-200 border-r-2 border black min-h-screen">
               <ul className="flex mt-5 ml-5 flex-col gap-2">
                    <li>
                         <Link to="/">Overview</Link>
                    </li>

                    <li>
                         <Link to="/myproducts">My Products</Link>
                    </li>
                    <li>
                         <Link to="/addproduct">Add Products</Link>
                    </li>
                    <li>
                         <Link to="/">Return Home</Link>
                    </li>
                    <li>
                         <button className="btn">Logout</button>
                    </li>

               </ul>
          </div>
     );
};

export default Sidebar;