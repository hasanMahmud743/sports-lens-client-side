import React from 'react';
import Banner from '../../Shared/Banner/Banner';
import HomeServices from '../../Shared/HomeServices/HomeServices';
import Info from '../../Shared/Info/Info';
import Slider from '../../Shared/Slider/Slider';
import useTitle from '../../UseTitle/UseTitle';

const Home = () => {
  useTitle('Home')
  
    return (
        <div className='max-w-7xl  mx-auto	'>
         
        
          <Slider></Slider>
          <HomeServices></HomeServices>
          <Banner></Banner>
          <Info></Info>
          
        </div>
    );
};

export default Home;