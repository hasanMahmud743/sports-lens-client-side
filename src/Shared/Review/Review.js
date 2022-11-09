import React from 'react';
import { FaStar } from "react-icons/fa";


const Review = ({review}) => {
    // console.log(review)
    
    return (
        <div className='md:p-3'>


        <div className="card  bg-base-200 shadow-xl">
        <div className="card-body">

            <div className='flex items-center	' >
                <img className='w-16 rounded-full' src={review?.image} alt="man" />
                <div className='pl-3' > <p className='text-xl font-bold'>Mikel Jhonson</p>
                <p>{review?.email}</p>
                <div className='flex text-yellow-600 pt-1'>  <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/></div></div>
            </div>

           
            <p className='pt-3'>{review?.text}</p>
            
        </div>
        </div>


            
        </div>
    );
};

export default Review;