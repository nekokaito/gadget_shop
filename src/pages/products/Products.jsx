import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/products/SearchBar';
import SortByPrice from '../../components/products/SortByPrice';
import FilterBar from '../../components/products/FilterBar';
import useAuth from '../../hook/useAuth';
import Loading from '../../components/root/Loading';
import axios from 'axios';
import baseUrl from '../../hook/baseUrl';
import ProductCard from '../../components/home/ProductCard';

const Products = () => {

     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(false);


     useEffect(() => {
          setLoading(true);
          const fetch = async () => {
               axios.get(`${baseUrl}/all-products`).then((res) => {
                    setProducts(res.data);
                    setLoading(false);
               })
          }

          fetch();
     }, [])


     return (
          <div className='container mx-auto'>


               <div className='flex justify-between items-center w-full mb-6'>
                    <SearchBar></SearchBar>
                    <SortByPrice></SortByPrice>
               </div>

               <div className='grid  grid-cols-12 w-full'>
                    <div className='col-span-2'>
                         <FilterBar></FilterBar>
                    </div>
                    <div className='ml-10 col-span-10'>
                         {
                              loading ? (<Loading />) : (
                                   <>
                                        {
                                             products.length === 0 ? (<div className='min-w-full min-h-screen flex justify-center items-center'>
                                                  <h1 className='text-bold  text-3xl'>No Product Found</h1>
                                             </div>) : (
                                                  <div className='min-h-screen grid grid-cols-3 gap-2'>


                                                       {
                                                            products.map(product => <ProductCard key={product.objectId} product={product}></ProductCard>)
                                                       }

                                                  </div>
                                             )

                                        }
                                   </>
                              )

                         }
                    </div>

               </div>
          </div>
     );
};

export default Products;