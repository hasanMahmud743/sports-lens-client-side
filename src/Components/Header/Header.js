import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { myContext } from '../../Contexts/Contexts';

const Header = () => {
  const {user, logOut} = useContext(myContext)

  const handleLogOut = () =>{
    logOut()
  }
    return (
        <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>

            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Log in</a></li>
              <li><a>Blog</a></li>
            </ul>

          </div>
        <Link to='/'>  <a className="btn btn-ghost normal-case text-xl">Sports-Lens</a></Link>
        </div>
        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
             {
              (user && user.uid) 
              ?
              <> 
                 <Link to={'/'}><li><a>Home</a></li></Link>
                 <Link to={'/blog'}><li><a>Blog</a></li></Link>
               <Link to='/myreview'><li><a>My Review</a></li></Link>
               <Link to={'/addservice'}><li><a>Add Service</a></li></Link>
                <Link onClick={handleLogOut}><li><a>Log Out</a></li></Link>
              </>
               :
               <>
                 <Link to={'/'}><li><a>Home</a></li></Link>
                 <Link to={'/login'}><li><a>Log in</a></li></Link>
                 <Link to={'/blog'}><li><a>Blog</a></li></Link>
               </>
             }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    );
};

export default Header;