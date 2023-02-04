import React, { useEffect, useState } from 'react';

const ProductDetailsHooks = () => {

    const [product , setProduct] = useState([]);
    useEffect(()=>{
        fetch('DBLfakedata.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))



    },[])
    return [product,setProduct];
};

export default ProductDetailsHooks;