import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../Contexts/Contexts';
import useTitle from '../../UseTitle/UseTitle';

const Login = () => {
  
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  useTitle('Login')
    const {signInUser} = useContext(myContext)

    const handleLogin = (e) =>{
        e.preventDefault()
        setLoading(true)
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        signInUser(email, password)

        .then(user => {
          console.log(user.user.email)
          const currentUser = {email: user.user.email}
            console.log(user)
            
            fetch('https://sports-lens-assignment.vercel.app/jwt',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.token)
            })

          setLoading(false)
          navigate('/')
         
        })
        .catch(err => {
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
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <p className='text-3xl text-center font-bold mt-10'>Login!</p>

      <form onSubmit={handleLogin} className="card-body">
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
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          <label className="label">
            <a href="#" className="label-text-alt ">New Here? Go to <Link to='/registration'  className="label-text-alt link link-hover  text-blue-600" >Registration</Link> Page</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;