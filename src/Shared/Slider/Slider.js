import React from 'react';

const Slider = () => {
    return (
        <div>

<div className='p-20 '>
            <div className="carousel w-full">

        <div id="slide1" className="carousel-item rounded-lg relative w-full">
            <img  src="https://media.istockphoto.com/id/1355086328/photo/american-football-championship-teams-ready-professional-players-aggressive-face-off-ready-for.jpg?b=1&s=170667a&w=0&k=20&c=oppcugL5if8KL9citBpZoSIlGL5bvzxxiKYOnA-WvRs=" className="w-full rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div> 


        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://media.istockphoto.com/id/1364827675/photo/huge-multi-sports-collage-taekwondo-tennis-soccer-basketball-etc.jpg?b=1&s=170667a&w=0&k=20&c=pVczaGSYyapRInxjFUy_2haDLCX8LKhhVWdWpS3T6Ws=" className="w-full rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
            <img src="https://media.istockphoto.com/id/1335861756/photo/professional-baseball-player-in-motion-action-during-match-at-stadium-over-blue-evening-sky.jpg?b=1&s=170667a&w=0&k=20&c=9UTjr2dhUECw0Lb_C8Hv8Pg0xukmSE14J5dbYXkMy5g=" className="w-full rounded-xl" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div> 
       
        </div>
                
            </div>
            
        </div>
    );
};

export default Slider;