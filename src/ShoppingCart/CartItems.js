import React from 'react';
import { Link } from 'react-router-dom';
import('./cartItems.css')

const CartItems = ({img,model,price}) => {
    return (
        <div className='cartItems'>
            <div className='cartitem_image'>

                <img src={img}></img>
            </div>

        <Link to={`/product/${111}`}>
            <p className='cartitem_name font-bold'>{model}</p>
        </Link>
        
        <p className='cartitem_price font-bold'>{price}</p>

        <select className='cartitem_select'>
        <option value={1}> 1 </option>
        <option value={2}> 2 </option>
        <option value={3}> 3 </option>
        <option value={4}> 4 </option>
        </select>

        <button className='cartitem_deleteBtn'>
        <i className='fas fa-trash'></i>
        </button>

        

        </div>
    );
};

export default CartItems;