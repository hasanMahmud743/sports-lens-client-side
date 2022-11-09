import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../Contexts/Contexts';
import ReviewGalary from '../../Shared/ReviewGallary/ReviewGalary';

const MyReview = () => {
    const [reviews, setReviews] = useState([])
    const {user} = useContext(myContext)
    console.log(reviews)
    // const review = useLoaderData

    useEffect(()=>{
        fetch(`http://localhost:5300/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data=> {
            setReviews(data)
        })
    }, [user?.email])

    const handleDelete =(id) =>{
        fetch(`http://localhost:5300/review/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = reviews.filter(rv => rv._id !== id)
                setReviews(remaining)
            }
            console.log(data)
        })
    }

   

    const modal = _id =>{

        <div>
   
   </div>

    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name & Email</th>
        <th>Service</th>
        <th>Reviews</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
   
      {
        (reviews.length === 0) ? <p className='pt-3 pb-20 font-bold text-2xl w-full'>No review is added yet.</p> : reviews.map( review =>{
            return <ReviewGalary key={review._id} modal={modal}  handleDelete={handleDelete} review={review}></ReviewGalary>
         })
      }
    </tbody>
   
  </table>


  



     </div>
            
        </div>
    );
};

export default MyReview;