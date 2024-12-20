import React from 'react';
import useAuth from '../../hook/useAuth';
import { Link } from 'react-router-dom';

const UserMenu = ({ user }) => {

     const { userLogout } = useAuth();
     return (

          <div className="dropdown dropdown-end">
               <div tabIndex={0} role="button">
                    <img className=' w-11 rounded-full' src={`${user?.photoURL || "/profile.png"}`} alt="" />
               </div>
               <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li> <Link to="/dashboard">Dashboard</Link> </li>
                    <li><button onClick={userLogout} className='btn'>Logout</button></li>
               </ul>
          </div>

     );
};

export default UserMenu;