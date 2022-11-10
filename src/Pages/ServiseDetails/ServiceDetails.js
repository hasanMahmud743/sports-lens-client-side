import React, { useContext, useEffect, useState } from 'react';
import { FaStar, FaStarHalf } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import { myContext } from '../../Contexts/Contexts';
import Review from '../../Shared/Review/Review';
import ReviewUser from '../../Shared/ReviewUser/ReviewUser';

const ServiceDetails = () => {
    const {user} = useContext(myContext)
    const [reviews, setReviews] = useState([])
    const [loader , setLoader] = useState(false)
   
    const details = useLoaderData()

    useEffect(()=>{
        fetch(`https://sports-lens-assignment.vercel.app/review?title=${details.title}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setReviews(data)
            
           
        })
    }, [loader, details.title])
    
    return (
       <div>
             <div className='md:p-5 max-w-3xl m-auto'>
             <p className='text-3xl p-5 font-bold'>Details of: {details.title}</p>

            <div  className="card m-10  bg-base-100 shadow-xl">
           
            <figure className="">
                <img src={details.image} alt="Shoes" className="rounded-md max-w-2xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title text-2xl">{details.title}</h2>
                <p>{details.description}</p>
                {/* <p>Created By: {details.created_by}</p> */}
                <p className=' flex align-center'> <div className='flex text-yellow-500 mr-4'><FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStarHalf/>  </div> {details.ratings} </p>
              
                <p className='text-6xl'>{details.current_price}$</p>
                <p className='text-3xl text-slate-400 line-through'>{details.prev_price}$</p>
              
                <div className="card-actions">
                <button  className="btn btn-primary">Buy Now</button>
                </div>
            </div>

            </div>
          <div className='m-5'>
              
          {
                (user && user?.uid) ? <ReviewUser loader={loader} setLoader={setLoader}  title={details.title}></ReviewUser>  : <p className='text-3xl text-center' > If you not login yet, please <Link className='text-blue-400' to={'/login'}>Login</Link> to add a review</p>
            }


           <div>
           <p className='text-3xl font-bold text-center pb-5 pt-16'>Previous reviews:</p>
          
           {
            reviews.length === 0 ? 
            <p className='text-3xl font-bold text-center text-red-400 border-lg'>No review was posted in this service yet. </p> : 
            reviews.map(review => <Review key={review._id} review={review}></Review>)
           }

           {
                
                
                
            }
           </div>
           
          </div>

           

           
            
        </div>

       
       </div>
    );
};

export default ServiceDetails;





    