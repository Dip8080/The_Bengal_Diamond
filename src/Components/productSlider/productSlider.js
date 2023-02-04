import React from 'react';
import { Carousel } from 'react-carousel-minimal';

const productSlider = () => {
    
    
    return (
        <div className=' p-1 lg:hidden'>        
        <div class=" w-96 bg-red-100 image-full my-4 border-0">
        <figure><img src="https://i.ibb.co/1XpvFkv/BANGLE-DIAMOND-PNG.png" alt="product" /></figure>
        <div class="card-body">
          <h2 class="card-title">Premium quality</h2>
          <p> We don't compromise in quality</p>
          
        </div>
      </div>
        <div class=" w-96 bg-red-100 bg-opacity-5 image-full border-0">
        <figure><img src="https://i.ibb.co/NtPrhzq/BANGLE-DIAMOND-PDF.jpg" alt="product" /></figure>
        <div class="card-body">
          <h2 class="card-title">Flowless Finishing</h2>
          <p>Each product gives you the felling of something different </p>
         
        </div>
      </div>
      </div>

    );
};

export default productSlider;