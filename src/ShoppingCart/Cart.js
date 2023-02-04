import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import ProductDetailsHooks from '../Components/Hooks/ProductDetailsHooks';
import CartItems from './CartItems';
import('./cart.css')

const Cart = () => {
    const {id} = useParams();

    const [product,setProduct] = useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res =>res.json())
        .then(data=>setProduct(data))





    },[])    

    const handlecheckout = ()=>{

     toast('your order has been placed');
     
    }
    return (
        <div className='cartScreen'>
            <div className='cartscreen_left'>
                <h2 className='text-center mb-5 bold shadow p-4 text-1xl uppercase'>shopping cart</h2>
            <CartItems key={product._key} img={product.img} model={product.model_No} price={product.price}></CartItems>
            </div>
            <div className='cartscreen_right'>
                <div className='cartscreen_info'>
                        <p> subtotal(0) items {product.model_No} </p>
                        <p>$488.44</p>
                       
                </div>
                <div>
                  
                    <button onClick={handlecheckout} className='btn btn-success rounded-0'>proceed to checkout</button> 
                 
                </div>
            </div>
        </div>
           
    );
};

export default Cart;