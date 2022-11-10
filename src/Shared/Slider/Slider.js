import React from 'react';
import '../Banner/Banner.css';

const Slider = () => {
    return (
        <div>

<div className='p- '>
            <div className="carousel w-full">

        <div id="slide1" className="carousel-item rounded-lg relative w-full">
            <div className='carousel-img'>
            <img  src="https://images.unsplash.com/photo-1515197304934-f95872d7156f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" className="w-full rounded-xl" />
          
            </div>
           
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Bringing the  <br />
                        Generation Change in a <br />
                         next level <br />
                        
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-80 pt-20">
                    <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/4 pt-10">
                    <button className="btn btn-warning mr-5">See More</button>
                    <button className="btn btn-outline btn-warning">Message Me</button>
                </div>

                
           
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 


        <div id="slide2" className="carousel-item relative w-full">
        
        <div className='carousel-img'>
        <img src="https://images.unsplash.com/photo-1488903460117-6fb0b4a4ec9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1475&q=80" className="w-full rounded-xl" />
             </div>
             <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Bringing the  <br />
                        Generation Change in a <br />
                         next level <br />
                        
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-80 pt-20">
                    <p className='text-xl text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/4 pt-10">
                    <button className="btn btn-warning mr-5">See More</button>
                    <button className="btn btn-outline btn-warning">Message Me</button>
                </div>
           

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
               
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
     
        </div>
                
            </div>
            
        </div>
    );
};

export default Slider;