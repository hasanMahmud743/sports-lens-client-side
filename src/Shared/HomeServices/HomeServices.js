import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HomeServices = () => {
  const [loading, setLoading] = useState(true)

    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('https://sports-lens-assignment.vercel.app')
        .then(res => res.json())
        .then(data => {
          setCards(data)
          setLoading(false)
        })
    }, [])

    return (
        <div>
         
            <h2 className='text-3xl font-bold text-center'>See all of our services here.</h2>
            {
          loading &&  <div className='text-center mt-10'>
          <button className="btn btn-square loading"></button>
          </div>
         }

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                cards.map(card=> 
                <div className="card  bg-base-100 shadow-xl">
                <figure className="p-5 cursor-pointer">
                  {/* <img src={card.image} alt="Shoes" className="rounded-xl" /> */}
                    <PhotoProvider>
                      <PhotoView src={card.image}>
                        <img src={card.image} alt="" />
                      </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description.slice(0, 100) + '...'}</p>
                  <div className="card-actions">
                  <Link to={`/services/${card._id}`}>  <button className="btn btn-primary">More Info</button></Link>
                  </div>
                </div>
              </div>
              )}
           </div>

            <div className='text-center py-10'>

            <Link to={'/services'}> <button className="btn btn-outline ">See More Services</button></Link>

            </div>
            
        </div>
    );
};

export default HomeServices;