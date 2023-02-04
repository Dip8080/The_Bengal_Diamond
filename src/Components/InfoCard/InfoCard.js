import React from 'react';
import { Link } from 'react-router-dom';
import('./Info.css')

const InfoCard = ({text, des,bg,url,to}) => {
    return (
      <div class="card w-96 bg-base-100 shadow-xl info_card">
      <figure><img src={url} alt=""  width={'100%'} height={'100%'}/></figure>
      <div class="card-body">
      <h2 class="card-title">
        {text}
      <div class="badge bg-purple-500">NEW</div>
        </h2>
        <p>{des}</p>
       <Link to={`${to}`}> <button className='rounded bg-pink-200 p-2 hover:px-4'>click here</button> </Link> 
      </div>
    </div>
    
     
    );
};

export default InfoCard;



{/* <div class="card w-96 bg-base-100 shadow-xl image-full rounded-0 info_card"> */}