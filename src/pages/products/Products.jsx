import React from 'react';
import SearchBar from '../../components/products/SearchBar';
import SortByPrice from '../../components/products/SortByPrice';
import FilterBar from '../../components/products/FilterBar';

const Products = () => {
     return (
          <div className='container mx-auto'>
               <h1 className='text-3xl text-center my-8 font-bold'>Products</h1>

               <div className='flex justify-between items-center w-full mb-6'>
                    <SearchBar></SearchBar>
                    <SortByPrice></SortByPrice>
               </div>

               <div className='grid  grid-cols-12 w-full'>
                    <div className='col-span-2'>
                         <FilterBar></FilterBar>
                    </div>
                    <div className='col-span-10'>Products</div>

               </div>
          </div>
     );
};

export default Products;