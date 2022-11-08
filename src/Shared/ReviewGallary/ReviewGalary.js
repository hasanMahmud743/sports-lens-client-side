import React from 'react';

const ReviewGalary = ({review, handleDelete}) => {
    console.log(review)
    const {email, image, title, text, _id} = review

   
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
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
         {title}
          <br/>
          <span className="badge badge-ghost badge-sm">{text}</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">EDIT REVIEW</button>
        </th>
      </tr>
            
    
    );
};

export default ReviewGalary;