import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex  '>
            <div className='width'>
                <p className='text-6xl py-10 font-bold'>Bringing out the best</p>
                <p className='text-2xl  pb-10'>Hey, i am the Mahmudul Hasan profession photographer here to give you a proffesional sports photographic service</p>
                <button className="btn  text-light  btn-info m-3">Request a Shoot</button>
                <button className="btn  btn-success m-3">Hire Me</button>


                
            </div>

            
        </div>
    );
};

export default Banner;