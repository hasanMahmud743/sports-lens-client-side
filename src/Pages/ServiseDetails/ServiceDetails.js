import React from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData()
    return (
       <div>
             <div className='md:p-5 max-w-3xl m-auto'>
            <p>this is service details page here {details._id}</p>

            <div  className="card m-10 bg-base-100 shadow-xl">
            <figure className="">
                <img src={details.image} alt="Shoes" className="rounded-md max-w-2xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl">{details.title}</h2>
                <p>{details.description}</p>
                {/* <p>Created By: {details.created_by}</p> */}
                <p className=' flex align-center'> <div className='flex text-yellow-500 mr-4'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalf/>  </div> {details.ratings} </p>
                {/* <p className='flex align-center '> <FaClock className=''/> <div className='mx-2'>Course Duration: {details.duration}</div></p> */}
                {/* <p className='flex align-center '> <FaUserTie/> <div className='mx-2' >Total Students: {details.students}</div></p> */}
                {/* <p className='flex'> <FaLanguage/> <div className='mx-2'>Language: {details.language?.first}, {details.language.second}</div> </p> */}
                {/* <p  className='flex'> <FaFileArchive/><div className='mx-2'>Subtitle: {details.subtitle?.first}, {details.subtitle.third}</div></p> */}
                
                
                <p className='text-6xl'>{details.current_price}$</p>
                <p className='text-3xl text-slate-400 line-through'>{details.prev_price}$</p>
           
            
              
                <div className="card-actions">
                <button  className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
            
        </div>

        <p className='text-3xl text-center' > If you not login yet, please <Link className='text-blue-400' to={'/login'}>Login</Link> to add a review</p>
       </div>
    );
};

export default ServiceDetails;





    