import React from 'react';
import { Link } from 'react-router-dom';
import Catagories from '../../Catagories/Catagories';
import About from '../About/About';
import AccordionQna from '../AccordionQna/AccordionQna';
import Banner from '../Banner/Banner';
import Contact from '../CONTACT/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Info from '../InfoCard/Info';
import Nav from '../Nav/Nav';
import Table from '../Nav/Table';
import Products from '../Product/Products';
import Sales from '../Sales/Sales';
import ViewC from '../ViewC/ViewC';
import Search from './Search';
import './Home.css'
import Partners from '../../Partners/Partners';
import ProductSlider from '../productSlider/productSlider';
import Directors from '../Directors/Directors';
import { useState } from 'react';
import { useEffect } from 'react';

const Home = () => {

    return (
        

        <div>
        
          
      
      
      <Search></Search>
      <Catagories></Catagories>
      <Banner></Banner>
    
      <h1 className='uppercase text-2xl shadow text-center my-6 p-5 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600'>Services</h1>
   <Info></Info>
   <Sales></Sales>
  
  
      <h1 className='text-1xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 '>Exclusive</h1>
      <Products></Products> 
      
       {/* <Link to={'/all'} className='btn text-center flex my-5 p-2 bg-pink-200 border-0 rounded bold w-24 allItem'> All Items </Link>  */}
       <ViewC></ViewC>

       <h1 className='text-1xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase'>honourable Directors</h1>

<Directors></Directors>
      {/*<h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase '>contact</h1> */}
      <Contact></Contact>

      <ProductSlider></ProductSlider>
      <h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase '>Partners</h1>
      <p className='text-center text-2xl '>Get all Bengal diamond products here</p>
      <br className='divider'></br>
      <Partners></Partners>

      {/* <h1 className='text-2xl text-center my-5 p-2 uppercase  text-transparent text-2xl bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 uppercase '>Customer's review</h1> */}
      <img src='https://i.ibb.co/cw6b6hT/custom-jewelley-1.png' alt='coming soon' className='lg:hidden'></img>
      {/* <Table></Table> */}
      
            
           
        </div>
    );
};

export default Home;    