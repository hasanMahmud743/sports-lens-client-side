import React, { useEffect, useState } from 'react';

const HomeServices = () => {

    const [card, setCart] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5300')
        .then(res => res.json())
        .then(data => setCart(data))
    }, [])

    return (
        <div>
            <h2>card have {card.length}</h2>
            
        </div>
    );
};

export default HomeServices;