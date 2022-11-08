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
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
   
      {
        reviews.map( review =>{
           return <ReviewGalary key={review._id} handleDelete={handleDelete} review={review}></ReviewGalary>
        })
      }
     
      
     
     


    </tbody>
   
   
    
  </table>
</div>
            
        </div>
    );
};

export default MyReview;