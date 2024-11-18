import { IoSearchOutline } from "react-icons/io5";


const SearchBar = () => {
     return (
          <form action="" className="flex gap-2">
               <input type="text" placeholder="Search Products" name="search" className="max-w-md input input-bordered" />
               <button className="btn"><IoSearchOutline /></button>
          </form>
     );
};

export default SearchBar;