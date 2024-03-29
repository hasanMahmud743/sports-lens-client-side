import React, { useContext } from 'react';
import { myContext } from '../../Contexts/Contexts';

const ReviewGalary = ({review, handleDelete, loader, setLoader}) => {
    console.log(review)
    const {user} = useContext(myContext)
    const {email, image, name, title, text, _id} = review


    let  placeholderText
    const collectText = e => {
        placeholderText = e.target.value
        
      }

      const handleSubmit =(id) =>{
        
        console.log(placeholderText)

        fetch(`https://sports-lens-assignment.vercel.app/review/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({text : placeholderText})
        })
        .then(res =>  res.json())
        .then(data => {
            console.log(data)
            alert('review updated')
            setLoader(!loader)})


   

    }

  



   
    return (
    
            <tr>
        <th>
            <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-xs">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName ? user.displayName : 'User'}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {title}
          <br/>
          {/* <span className="badge badge-ghost badge-sm">{text}</span> */}
        </td>
        <span className="badge badge-ghost badge-sm">{text}</span>
        <th>
        <label htmlFor={_id} className="btn btn-outline btn-sm">Edit Review</label>

        </th>

<input type="checkbox" id={_id} className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <p className='font-bold text-xl py-3 '>Edit Review section:</p>
  
    <input onChange={collectText} name='placeholder' type="placeholder" className="textarea textarea-bordered w-full pb-28" placeholder="Update your review..."></input>
   
  
    
    <div className="modal-action">
    {/* <button  className='btn'>submit</button> */}
      <label onClick={()=> handleSubmit(_id)} htmlFor={_id} className="btn">submit</label>
    </div>
  </div>

      
</div>
       
      </tr>
    );
};

export default ReviewGalary;