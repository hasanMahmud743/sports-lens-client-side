import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeServices = () => {

    const [cards, setCards] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5300')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>See all of our services here.</h2>

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
           {
                cards.map(card=> 
                <div className="card  bg-base-100 shadow-xl">
                <figure className="p-5">
                  <img src={card.image} alt="Shoes" className="rounded-xl" />
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