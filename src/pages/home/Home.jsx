import React from 'react';
import Banner from '../../components/home/Banner';
import FeaturedProducts from '../../components/home/FeaturedProducts';
import UserReview from '../../components/home/UserReview';
import Accordion from '../../components/home/Accordion';

const Home = () => {
     return (
          <div>
               <Banner></Banner>

               <div className='container mx-auto'>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Featured Products</h1>
                         <FeaturedProducts></FeaturedProducts>
                    </div>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Review</h1>
                         <UserReview></UserReview>
                    </div>
                    <div className='my-32'>
                         <h1 className='mb-16 text-center font-bold text-3xl'>Questions</h1>
                         <Accordion></Accordion>
                    </div>
               </div>
          </div>
     );
};

export default Home;