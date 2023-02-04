import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import ('./Product.css')

const Products = () => {
    const [jewls , setJewls] = useState([]);
    useEffect(()=>{
        fetch("fakeData.json")
        .then(res=>res.json())
        .then(data=>setJewls(data))

    },[])
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 w-full p-4'>
            {
                jewls.slice(48,57).map(x=><Product key={x._id}
                      img={x.img}
                      diamondWeight={x.Diamond_weight}
                      goldWeight={x.gross_weight}
                      modelNo={x.model_No} id={x._id}
                      price={x.price} stock={x.stock}
                      img2={x.img2}
                      ></Product>)
            }


        </div>
    );
};

export default Products;