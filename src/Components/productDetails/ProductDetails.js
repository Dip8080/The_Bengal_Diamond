import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetailsHooks from '../Hooks/ProductDetailsHooks';
import ShowDetails from './ShowDetails';

const ProductDetails = () => {
 
    const {id} = useParams();

    const [product,setProduct] = useState({});
    useEffect( ()=>{
        fetch(`http://localhost:5000/details/${id}`)
        .then(res =>res.json())
        .then(data=>setProduct(data))





    },[])
    return (
        <div>
            <h1 className='text-center bold uppercase'> Product Model :  {product.model_No}
</h1>

            {
                <ShowDetails key={product.id} 
                Diamond_weight={product.Diamond_weight}
                gold_weight={product.gold_weight}
                img={product.img} model_No={product.model_No}
                price={product.price} stock={product.stock}
                id={product._id}
                ></ShowDetails>
            }
            

        </div>
    );
};

export default ProductDetails;