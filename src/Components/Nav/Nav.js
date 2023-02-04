import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { DialogContentText } from '@mui/material';
import Table from './Table';
import { ClassNames } from '@emotion/react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../../Loading/Loading';
import('./Nav.css')

const Nav = () => {
  const navigate = useNavigate();
  const [user,loading] = useAuthState(auth);

  if(loading){
    return <Loading></Loading>
  }

  console.log(user)

  const handlenavigate = () =>{
    navigate('/contact')
  }

  const handleLogOut = () =>{
    signOut(auth);

  }

  const transitionTail = "transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none";
    return (
      <>
    
        <div class="navbar bg-base-100 p-2 sticky">
        <div class="navbar-start">
          <div class="dropdown block lg:hidden">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            
            
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3  shadow bg-base-100 rounded-box w-screen">
              <div className='grid grid-cols-3 lg:grid-cols-1 gap-3 justify-start w-3/4 p-2 '>
                    <button className='btn rounded   bg-white p-1 bg-white'> btn one</button>
                    <button className='btn rounded    p-1 bg-white' > btn two</button>
                    <button className='btn rounded   p-1 bg-white'>btn three</button>
              </div>
              <Link to={'/'}>   <li>
              <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a>Homepage</a>
              </div>
               
                
                </li> </Link>
             <Link to={'/all'}><li>
              
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
               <a>Catalogue</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Rings</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Nosepin</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Earrings</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Pendent</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Bangles</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Neckles</a>
              </div>
              </li></Link>
             <Link to={'/about'}> <li>
             <div class="mask  w-24 h-12">
                <img src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?w=1060&t=st=1663482589~exp=1663483189~hmac=73cf1bfa231ae16a53ff258b34097812594fe24c57651d51584dd61c96fc8e81" alt="Avatar Tailwind CSS Component" />
                <a> Pendent</a>
              </div>
              </li></Link>
             

             {/* <Link to={'/about'}> <li><a> Nose-pin</a></li></Link>
             <Link to={'/about'}> <li><a> Earring</a></li></Link>
             <Link to={'/about'}> <li><a> Pendent</a></li></Link>
             <Link to={'/about'}> <li><a> Bengals</a></li></Link>
             <Link to={'/about'}> <li><a> Neckles</a></li></Link>
             <Link to={'/about'}> <li><a> Pendent</a></li></Link> */}
           
            </ul>
          </div>
        </div>
        <div class="navbar-center">
          
        <Link to={'/'}> <li className= "list-none text-1xl p-2 mx-4 hidden lg:block"><a> Home</a></li></Link>
        <Link to={'/contact'}> <li className='list-none text-1xl p-2 mx-4 hidden lg:block'><a> Contact </a></li></Link>
        {/* small logo portal */}

        <Link to={'/'}>  <a class="border-0 normal-case  lg:text-3xl shadow-xl font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ">
          
          
          <img src='https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1664435738~exp=1664436338~hmac=c656b9a0ebf29ca539cdd1d671c48c6af1a7b2ee7318dab746ab602ccd1a574b' className='logo'></img></a>
          
          
          </Link>
        <Link to={'/'}>  
          
      
          <a class="btn border-0 normal-case  lg:text-3xl shadow-xl font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ">
          
          <img src='https://i.ibb.co/BNzWf7n/4c84609345e0209d6c3ad3cdfbad6772-removebg-preview.png' className='logo'/>
         </a>
         
          
          </Link>
        
        <Link to={'/'}>  

          { 
            user ?
            <div class="relative w-10 h-10">
            <img class="rounded-full border border-gray-100 shadow-sm" src={user.photoURL} alt="user image" />
            <div class="absolute top-0 right-0 h-4 w-4 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
          </div>
             : <a class="border-0 normal-case  lg:text-3xl shadow-xl font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ">
                
                <img src='https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1664438334~exp=1664438934~hmac=0016965ad116600cb6652f5d7b746563fea82560b48fc4af4c408e809446951e' className='logo'></img></a>

          }
          
          
          
          </Link>
             <Link to={'/about'}> <li className='list-none text 1xl p-2 mx-4 hidden lg:block'><a> About</a></li></Link>
             <Link to={'/cart'}> <li className='list-none text 1xl p-2 mx-4 hidden lg:block'>
              
              <a> <i className='fas fa-shopping-cart'></i> cart <span className='something'>0</span></a></li></Link>
             
              <Link to={'/login'}> <li className='list-none text-1xl p-2 mx-4 hidden lg:block'><a> { user ? <button className='btn rounded bg-transparent' onClick={handleLogOut}>Logout</button>  : <button className='btn bg-transparent px-5 py-1  rounded '> Login</button>}</a></li></Link>
      

        </div>
        
        <div class="navbar-end">
          <button class="btn btn-ghost rounded mx-3 hidden lg:block text-yellow-600 text-1xl underline">{user ? <a href='/mail.google.com'>{user.displayName}</a> :  <p></p>} </button>
        <button class="btn btn-ghost btn-circle hidden lg:block">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
</svg>
          </button>
      
          <p className='mx-4 hidden lg:block'>+880177784568</p>
          <button class="btn btn-ghost btn-circle hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button class="btn btn-ghost btn-circle hidden lg:block">
            <div class="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <button class="btn btn-ghost btn-circle hidden lg:block" onClick={handlenavigate}>
            <div class="indicator ">
          <a href='#contact'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg> </a>
              <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
           
          </button>
        </div>
      </div>
      </>
    );
};

export default Nav;

{/* <a class=" normal-case  lg:text-2xl shadow-xl font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 ">
<img src={user.photoURL}></img> </a> */}