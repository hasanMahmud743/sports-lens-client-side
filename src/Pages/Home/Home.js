import React from 'react';
import HomeServices from '../../Shared/HomeServices/HomeServices';
import Slider from '../../Shared/Slider/Slider';
import useTitle from '../../UseTitle/UseTitle';

const Home = () => {
  useTitle('Home')
  
    return (
        <div className='max-w-7xl  mx-auto	'>
        
          <Slider></Slider>
          <HomeServices></HomeServices>
          
        </div>
    );
};

export default Home;