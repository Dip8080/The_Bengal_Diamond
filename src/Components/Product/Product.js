import React from 'react';
import { useNavigate } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';
import ('./Product.css')
const Product = ({img,diamondWeight,goldWeight,modelNo,key,id,stock,price,img2}) => {
  const navigate = useNavigate();
  const navigateToDetails = id =>{

    navigate(`/details/${id}`);


  }

    return (
        <div class="card w-full bg-base-100 shadow box rounded shoadow-3xl shadow-yellow-500">
{/* <div id="corner-ribbon">
  <div>
    <h1 className='uppercase   p-5 bold-extra text- shadow text-green-500 antialiased'> Certified </h1>
      
    <div>
      
      <div> </div>
     
    </div>
    <h1 className='italic bold px-2 text-1xl my-2'> Internationally certified jewellery
    <img src='https://i.ibb.co/cFWyCSj/depositphotos-25851005-stock-photo-certified-stamp-removebg-preview.png" alt="depositphotos-25851005-stock-photo-certified-stamp-removebg-preview' className='mx-10 mt-0 ' height={'90px'} width={'90px'}></img>
    </h1>
   
  </div>
</div> */}
        <figure class="px-10 pt-10">
        <div class="carousel w-full shadow-lg shadow-red-400 rounded">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={img} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <span class="">❮</span> 
      <span class="">❯</span>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={img2} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <span href="" class="">❮</span> 
      <span href="" class="">❯</span>
    </div>
  </div> 
</div>
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Model No : {modelNo}</h2>
          <p>Diamond weight : {diamondWeight}</p>
          <p>Gold Weight : {goldWeight}</p>
          {/* <p>Price : {price} $</p>
          <p>stock : {stock} pices</p> */}
          <ReactWhatsapp number='+8801758907846' class="rounded p-2  bg-rose-300" message={`hello , i would like to purchase model No :${modelNo}`} > Buy now </ReactWhatsapp>
        </div>
      </div>
    );
};

export default Product;