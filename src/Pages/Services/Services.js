import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';



const Services = () => {
    const serviceData = useLoaderData()
    
    
    return (
        <div className='max-w-7xl  mx-auto	'>
           
          
            {/* <p>This is services here{serviceData.length}</p> */}
            <div className='grid grid-cols-3 gap-10'>
         
                {
                    serviceData.map(data => 
                        <div className="card  bg-base-100 shadow-xl">
                            <figure className="p-10 cursor-pointer">
                              
                                    <PhotoProvider >
                                    <PhotoView src={data.image}>
                                        <img src={data.image} alt="" />
                                    </PhotoView>
                                    </PhotoProvider>
                                </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.title}</h2>
                                <p>{data.description.slice(0, 100) + '...'}</p>
                                <p>Previous Price:{data.prev_price} </p>
                                <p>Current Price:{data.current_price} </p>

                                <div className="card-actions">
                                <Link to={`/services/${data._id}`}><button className="btn btn-primary">View Details</button></Link>
                                </div>
                            </div>
                            </div>
                            )}
            </div>
            
        </div>
    );
};

export default Services;