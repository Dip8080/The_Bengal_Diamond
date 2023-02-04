import React, { useEffect, useState } from 'react';
import ProductDetailsHooks from '../Hooks/ProductDetailsHooks';

const All = () => {
  const [product,setProduct] = ProductDetailsHooks();
    return (
      <>
          <h1 className='uppercase text-2xl shadow text-center my-6 p-5 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600'> Catalogue</h1>

        <div className='grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-3'>
            {
                product.map(x=><ProductCard
                   
                    key={x._id}
                    img={x.img}
                    diamondWeight={x.Diamond_weight}
                    goldWeight={x.gold_weight}
                    modelNo={x.model_No}
                
                ></ProductCard>)
            }
        </div>
        </>
    );
};

const ProductCard =({img,diamondWeight,goldWeight,modelNo})=>{

    return (
        <div class="card w-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img className='product_image' src={img} alt="Shoes"  />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Model No : {modelNo}</h2>
          <p>Diamond weight : {diamondWeight}</p>
          <p>Gold Weight : {goldWeight}</p>
          <div class="card-actions">
            <button class="bg-pink-200 p-2 mx-2 rounded">Buy now</button>
          </div>
        </div>
      </div>
    );


}

export default All ; 