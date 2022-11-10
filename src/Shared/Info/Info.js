import React from 'react';
import './Info.css';

const Info = () => {
    return (
        <div className='pt-20'>
            <p className='text-5xl font-bold text-center p-4'>Some rare collection</p>

            <div className='grid md:grid-cols-3 gap-3 p-5'> 
                <div >
                    <img className='rounded-lg' src="https://plus.unsplash.com/premium_photo-1663075949138-8b873b727662?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />

                </div>

                <div>
                <img className='rounded-lg' src="https://images.unsplash.com/photo-1593606839007-cdc8cea35d9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    
                </div>

                <div>
                <img  className='rounded-lg' src="https://media.istockphoto.com/id/1415781374/photo/athlete-training-on-tennis-court-holding-tennis-racket-and-ball.jpg?s=612x612&w=is&k=20&c=JI2G6BiVtPqeXZT3Ik2yEG_13Bye_H3wX9jr29iNWkU=" alt="" />

                    
                </div>

            </div>

            <div className='grid md:grid-cols-2  gap-3 p-5'>
                <div>
                    <img className='rounded-lg ' src="https://images.unsplash.com/photo-1597068298639-643e8ddee820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />

                </div>
                <div>

                <img className='rounded-lg' src="https://images.unsplash.com/photo-1623196157437-4748b451191e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                </div>
            </div>
            
        </div>
    );
};

export default Info;