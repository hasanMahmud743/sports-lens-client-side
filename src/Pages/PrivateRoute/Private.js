import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { myContext } from '../../Contexts/Contexts';


const Private = ({children}) => {
    let location = useLocation();

    
    const {user, loading} = useContext(myContext)
    if(loading){
        return <div className='text-center p-10'> <button className="btn loading ">loading</button></div>
     }
    if(user && user.uid){
        return children
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
   
};

export default Private;