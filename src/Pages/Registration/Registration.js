import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../Contexts/Contexts';

const Registration = () => {
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
    const {createUser, googleSignIn} = useContext(myContext)

    const handleRegistration = (e) =>{
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        createUser(email, password)
        .then(user => {
          console.log(user.user)
          setLoading(false)
          navigate('/')
        })
        .catch(err => {
          setLoading(false)
        })

    }

    const googleSign = () =>{
      setLoading(true)
        googleSignIn()
        .then(user => {
          console.log(user.user)
          navigate('/')
        })
        .catch( err => {
          console.log(err)
          setLoading(false)

        })
    }
    return (
        <div>
           {
          loading &&  <div className='text-center pt-10 bg-base-200'>
          <button className="btn btn-square loading"></button>
          </div>
         }
          <div className="hero min-h-screen lg:p-20 bg-base-200">
  <div className="hero-content flex-col  lg:flex-row-reverse">
    <div className="text-center lg:m-20  lg:text-left">
      <h1 className="text-5xl font-bold">Registration!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <p className='text-3xl text-center font-bold mt-10'>Registration!</p>

      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
        
          <label className="label">
            <a href="#" className="label-text-alt ">Already Registered? Go to <Link to='/login'  className="label-text-alt link text-blue-600 link-hover" >Login</Link> Page</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p onClick={googleSign}  className="btn btn-active btn-secondary">Google</p>
        

      </form>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;