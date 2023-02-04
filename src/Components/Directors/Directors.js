import azad from '../../Dir_Images/azad_sir.jpg'
import uttam from '../../Dir_Images/Uttam_sir.jpg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Directors.css';

const Directors = () => {
  const nevigate = useNavigate();
  const handleNevigate = () =>{
    nevigate('/azadsir');
  }
  const handleNevigate2=()=>{
    nevigate('/uttamsir');
  }
 const handlealldirectors=()=>{
  nevigate('/alldirectors');
 }
    return (
        <div className='grid lg:grid-cols-2 lg:mx-96 '>
        <div className="card w-96 glass rounded p-1 mx-1 shadow-lg shadow-yellow-300">
  <figure><img className='object-fit:contain dir'  src={azad} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Azad Ahmed</h2>
    <p className='card-title'>Chairman</p>
    {/* <p>Demo text demo text Demo text demo text Demo text demo text 
    Demo text demo text Demo text demo text...
    </p> */}
    {/* <div className="card-actions justify-start">
      <button onClick={handleNevigate} className="btn btn-secondary rounded">see more</button>
    </div> */}
  </div>
</div>
        <div className="card w-96 glass rounded p-1 mx-1 my-3 shadow-lg shadow-yellow-300">
  <figure><img  className='dir' src={uttam} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Uttam Banik </h2>
    <p className='card-title'>Managing Director</p>
    {/* <p>Demo text demo text Demo text demo text Demo text demo text 
    Demo text demo text Demo text demo text...
    </p> */}
    {/* <div className="card-actions justify-start">
      <button onClick={handleNevigate2}  className="btn btn-secondary rounded">see more</button>
    </div> */}
  </div>
</div>
<div className='card-actions justify-center btnAlldir'>
<button onClick={handlealldirectors} className='btn bg-blue-100 my-3 border-0 rounded'> All directors </button>
</div>
</div>
    );
};

export default Directors ; 