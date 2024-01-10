import React from 'react';

const Banner: React.FC = () => {
  return (
    <div className="banner">
        <h1 className='banner_title'>Grab promo code</h1>
        <p className='banner_desc'>Grab Food is now in the Grab app !</p>
        <button className='banner_btn'>Get code</button>
    </div>
  );
};

export default Banner;
