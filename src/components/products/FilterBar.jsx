import { CiFilter } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { TbFilter } from "react-icons/tb";


const FilterBar = () => {
     return (
          <div className="bg-gray-200 w-full min-h-screen rounded-2xl p-4">
               <div className=" mt-10">

                    <h2 className="text-xl font-bold inline-flex gap-2"> <TbFilter size={20}></TbFilter>Filter</h2>
               </div>
               <div className="mt-8 flex flex-col gap-2 items-center">
                    <select className="select select-bordered w-full max-w-xs p-[11px]">
                         <option disabled selected>Brand</option>
                         <option value='asc'>Low to High</option>
                         <option value='desc'>Hight to Low</option>
                    </select>
                    <select className="select select-bordered w-full max-w-xs p-[11px]">
                         <option disabled selected>Category</option>
                         <option value='asc'>Low to High</option>
                         <option value='desc'>Hight to Low</option>
                    </select>

                    <button className="btn w-full max-w-xs p-[11px]"> <GrPowerReset />Reset</button>
               </div>
          </div>
     );
};

export default FilterBar;