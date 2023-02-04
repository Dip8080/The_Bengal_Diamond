import React from 'react';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendEmailVerification, signOut } from 'firebase/auth';

 const Login = () => {
  const navigate = useNavigate();

  const handleNavigate=()=>{
    navigate('/register')
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook] = useSignInWithFacebook(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  if(user){
    navigate(from,{replace: true});
  }
  const onSubmit = data => console.log(data);

  const handleLogOut=()=>{
    signOut(auth);
   }
 
  const handleGoogleSignIn = () =>{
    signInWithGoogle();
    sendEmailVerification(auth.currentUser);
   
  }

  const handleFacebookSignIn = () =>{
    signInWithFacebook();

  }

    return (

 
  
  <div class="w-full max-w-xs  mx-auto">
            <h1 className='text-2xl bold uppercase  text-center p-4 my-5'>Please Login</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              
            <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
  </label>
  <input type="email" 
  placeholder="enter your mail" 
  class="input input-bordered w-full max-w-xs rounded" 
  {...register("email", {


    required:{
value: true,
message: "email is required"
    
  },

  pattern:{
    value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
    message: "pleage give a valid email"
  },
})}
  
  />
  {/* <label class="label">
    { error.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
    { error.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
   
  </label> */}
  
  {/* password */}
  <label class="label">
    <span class="label-text">password</span>
  </label>
  <input type='password' placeholder='please enter your password' className='input input-bordered w-full max-w-xs rounded'>

  </input>


</div>

          
 
          {errors.emailRequired && <span className='text-red-300'>This field is required</span>}
      
      <input className='btn rounded my-5 ' type="submit" />
    </form>

        <div className='my-5 p-3'  >
            <a class="  align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
           First time here ? Please <Link onClick={handleNavigate} to={'/register'}> register.</Link>
            </a>
            </div>

            <div className='divider uppercase'>or</div>
            <div className='flex '>
            <button onClick={handleGoogleSignIn} class="flex align-center btn w-1/2 mx-2 bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign in with Google
            </button>
            <button onClick={handleFacebookSignIn} class="flex align-center btn w-1/2 mx-2 bg-blue-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign in with Facebook
            </button>
            </div>
            <button onClick={handleLogOut} className='btn w-full p-3 bg-red-200 my-4 rounded text-red-400'> signOut </button>
        </div>
);
};

export default Login;



{ /*<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Email
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <div className=' uppercase'>or</div>
            <button onClick={() => signInWithGoogle()} class="btn w-1/2 mx-2 bg-green-500 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign in with Google
            </button>
             
            <button></button>
           
          </div>
          
</form> */}
