/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import SearchBar from '../../components/products/SearchBar';
import SortByPrice from '../../components/products/SortByPrice';
import FilterBar from '../../components/products/FilterBar';
import Loading from '../../components/root/Loading';
import axios from 'axios';
import baseUrl from '../../hook/baseUrl';
import ProductCard from '../../components/home/ProductCard';


const Products = () => {

     const [products, setProducts] = useState([]);
     const [loading, setLoading] = useState(false);
     const [search, setSearch] = useState("");
     const [sortPrice, setSortPrice] = useState('asc');
     const [sortBrand, setSortBrand] = useState('');
     const [sortCategory, setSortCategory] = useState('');


     useEffect(() => {
          setLoading(true);
          const fetch = async () => {
               axios.get(`${baseUrl}/all-products?title=${search}&sort=${sortPrice}&brand=${sortBrand}&category=${sortCategory}`).then((res) => {
                    setProducts(res.data);
                    setLoading(false);
               })
          }

          fetch();
     }, [search, sortPrice, sortBrand, sortCategory])


     const handleSearch = (e) => {
          e.preventDefault();
          setSearch(e.target.search.value)

          e.target.search.value = "";
     }

     const handleReset = () => {
          setSearch('');
          setSortBrand('');
          setSortCategory('');
          setSortPrice('asc');
          window.location.reload();
     }

     return (
          <div className='container mx-auto'>


               <div className='flex justify-between items-center w-full mb-6'>
                    <SearchBar handleSearch={handleSearch}></SearchBar>
                    <SortByPrice setSortPrice={setSortPrice}></SortByPrice>
               </div>

               <div className='grid  grid-cols-12 w-full'>
                    <div className='col-span-2'>
                         <FilterBar setSortBrand={setSortBrand} setSortCategory={setSortCategory} handleReset={handleReset}></FilterBar>
                    </div>
                    <div className="ml-10 col-span-10"> {loading ? <Loading /> :
                         <> {products.length === 0 ? <div className="min-w-full min-h-screen flex justify-center items-center">
                              <h1 className="font-bold text-3xl">No Product Found</h1>
                         </div> : <div className="min-h-screen grid grid-cols-3 gap-2">
                              {products.map((product) => <ProductCard key={product._Id} product={product} />)}
                         </div>
                         }
                         </>
                    }
                    </div>


               </div>
          </div>
     );
};

export default Products;