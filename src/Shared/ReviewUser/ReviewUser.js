import React, { useContext } from 'react';
import { myContext } from '../../Contexts/Contexts';

const ReviewUser = ({title}) => {
    // console.log(title)
    const {user} = useContext(myContext)
  

    const submitReview =(e) =>{
        e.preventDefault()
        const email = user.email
        const image = user.photoURL
        const time = new Date().toLocaleTimeString()
        // const name = e.target.text.value
        const text = e.target.placeholder.value
        console.log(text)
        const review = {email, image, text, title, time}

        fetch('http://localhost:5300/review',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(review) 
        })
        .then(res => res.json())
        .then(data => {
            alert('reviwe udatedd')
            e.target.reset()
        })
    }

    return (
        <div>
            
            <div>

            
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
    <p className='text-3xl font-bold text-center pt-5'>Client review section:</p>

      <form onSubmit={submitReview} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={user.email} placeholder="Your Name" className="input input-bordered"  />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Image</span>
          </label>
          <input type="text" defaultValue={user.photoURL}  placeholder="Your Image" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">User Review</span>
          </label>
          <input name='placeholder' type='placeholder' className="textarea textarea-info h-24"  placeholder="Enter Your review"/>
        </div>


        <div className="form-control mt-6">
          <button  className="btn btn-primary">Submit review</button>
        </div>

      </form>
    </div>
  </div>
</div>
            </div>
            
      
    );
};

export default ReviewUser;