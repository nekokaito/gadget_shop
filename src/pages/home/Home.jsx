import React from 'react';
import Banner from '../../components/home/Banner';
import FeaturedProducts from '../../components/home/FeaturedProducts';

const Home = () => {
     return (
          <div>
               <Banner></Banner>

               <div className='my-32'>
                    <h1 className='mb-16 text-center font-bold text-3xl'>Featured Products</h1>
                    <FeaturedProducts></FeaturedProducts>
               </div>
          </div>
     );
};

export default Home;