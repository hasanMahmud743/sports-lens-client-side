import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    

    const serviceData = useLoaderData()
    
    return (
        <div className='max-w-7xl  mx-auto	'>
            <p>This is services here{serviceData.length}</p>
            <div className='grid grid-cols-3 gap-10'>
                {
                    serviceData.map(data => 
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="p-10">
                                <img src={data.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.description}</p>
                                <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                            </div>
                            )}
            </div>
            
        </div>
    );
};

export default Services;