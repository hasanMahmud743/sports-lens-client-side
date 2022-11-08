import React from 'react';
import { FaStar } from "react-icons/fa";


const Review = () => {
    
    return (
        <div className='md:p-5'>

        <div className="card  bg-base-200 shadow-xl">
        <div className="card-body">

            <div className='flex items-center	' >
                <img className='w-16 rounded-full' src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="man" />
                <div className='pl-3' > <p className='text-xl font-bold'>Mikel Jhonson</p>
                <div className='flex text-yellow-600 pt-1'>  <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/>  <FaStar/></div></div>
            </div>

           
            <p className='pt-3'>If a dog chews shoes whose shoes does he choose Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ea magnam velit iste dolores voluptas ab magni unde quasi iusto? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, soluta! </p>
            
        </div>
        </div>


            
        </div>
    );
};

export default Review;