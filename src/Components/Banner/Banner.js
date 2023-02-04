import slide_one from '../../Image/slide_one.jpg'
import slide_two from '../../Image/slide_two.jpg'
import slide_three from '../../Image/slide_three.jpg'
import React from 'react';
import ('./Banner.css') ;



const Banner = () => {
    return (
        <div class="carousel w-full slide_div">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={slide_one} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" class="">❮</a> 
            <a href="#slide2" class="">❯</a>
          </div>
        </div> 
        <div id="slide2" class="carousel-item relative w-full">
          <img src={slide_two} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" class="">❮</a> 
            <a href="#slide3" class="">❯</a>
          </div>
        </div> 
       
        <div id="slide4" class="carousel-item relative w-full">
          <img src={slide_three} class="w-full" />
          <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" class="">❮</a> 
            <a href="#slide1" class="">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;