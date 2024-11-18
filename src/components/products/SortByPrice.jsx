

const SortByPrice = () => {
     return (
          <select className="select select-bordered w-full max-w-xs p-[11px] lg:w-40">
               <option value='asc'>Low to High</option>
               <option value='desc'>Hight to Low</option>
          </select>
     );
};

export default SortByPrice;