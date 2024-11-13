import React from 'react';

const Banner = () => {
     return (
          <div>
               <div
                    className="hero min-h-screen"
                    style={{
                         backgroundImage: "url(https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404178.jpg?t=st=1731518377~exp=1731521977~hmac=367c21907a54630799e4a59d228fa484a4ec9a0f2a518e0196157c441472ea70&w=1380)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                         <div className="max-w-md">
                              <h1 className="mb-5 text-5xl font-bold">GadgetShop</h1>
                              <p className="mb-5">
                                   Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                   quasi. In deleniti eaque aut repudiandae et a id nisi.
                              </p>
                              <button className="btn btn-primary">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;