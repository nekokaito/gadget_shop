import React from 'react';
import SearchBar from '../../components/products/SearchBar';

const Products = () => {
     return (
          <div className='container mx-auto'>
               <h1 className='text-3xl text-center my-8 font-bold'>Products</h1>

               <div className='flex justify-between items-center w-full mb-6'>
                    <SearchBar></SearchBar>
                    <h1>Sorting</h1>
               </div>

               <div className='grid gird-cols-12 w-full'>
                    <div className='col-span-2'>Filter</div>
                    <div className='col-span-10'>Products</div>

               </div>
          </div>
     );
};

export default Products;