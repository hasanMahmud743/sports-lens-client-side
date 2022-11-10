import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { myContext } from '../../Contexts/Contexts';
import ReviewGalary from '../../Shared/ReviewGallary/ReviewGalary';
import useTitle from '../../UseTitle/UseTitle';

const MyReview = () => {
  useTitle('My Review')
    const [reviews, setReviews] = useState([])
    const [loader, setLoader] = useState(false)
    const {user, logOut} = useContext(myContext)
    console.log(reviews)
    // const review = useLoaderData
    const notify = () => toast("Review Deleted successfully!");

    useEffect(()=>{
       
        
        fetch(`http://localhost:5300/review?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data=> {
            setReviews(data)
            console.log(data)
        })
    }, [user?.email, loader])



    const handleDelete =(id) =>{
        fetch(`https://sports-lens-assignment.vercel.app/review/${id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                const remaining = reviews.filter(rv => rv._id !== id)
                setReviews(remaining)
                notify()
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
        <th>Name & Email</th>
        <th>Service</th>
        <th>Reviews</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
   
      {
        (reviews.length === 0) ? <p className='pt-3 pb-20 font-bold text-2xl w-full'>No review is added yet.</p> : reviews.map( review =>{
            return <ReviewGalary key={review._id} setLoader={setLoader} loader={loader}    handleDelete={handleDelete} review={review}></ReviewGalary>
         })
      }
    </tbody>
   
  </table>


  



     </div>
     <ToastContainer />
        </div>
    );
};

export default MyReview;