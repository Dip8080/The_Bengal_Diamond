import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ProductDetailsHooks from '../Hooks/ProductDetailsHooks';
import('./ProductDetails.css')

const ShowDetails = ({Diamond_weight,gold_weight,img,model_No,price,stock,id}) => {
    const [product,setProduct] = ProductDetailsHooks();
    const navigate = useNavigate();
    const [user,loading] = useAuthState(auth);
    
    const handleNavigateTocart=id=>{
      navigate(`/cart/${id}`)
    }
    return (
      <div className='productScreen'>
        <div className='left_image'>
          <img src={img}></img>
        </div>
        <div className='left_info shadow '>
          <input className='input rounded border-1 w-full'  value={`Welcome Mr. ${user.displayName},`}></input>
          <input className='input rounded border-1 w-full' value={`Email : ${user.email}`}></input>
          {/* <input className='input rounded border-1 w-full ' value={user.email}> </input> */}
          <p className='left_name'>Model : {model_No}</p>
          <p className='left_name'>price : ${price}.00 </p>
          <p className='left_name bold-0'>description : demo text  demo text  demo text  demo text  demo text  demo text  demo text  demo text  demo text  demo text </p>
        </div>
        <div className='productScreen_right p-2'>
            <div className='right_info shadow-2xl'>
              <p>price : <span>${price}.00</span></p>
              <p>status : <span>In Stock</span></p>
              <p>
                qty
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                </select>
              </p>
            <p>
              <button onClick={()=>handleNavigateTocart(id)} type='button'>Add to cart
              </button>
            </p>
            </div>
        </div>
      </div>
    );
};

export default ShowDetails;


{/* <div class="card lg:card-side bg-base-100 shadow-xl">
<figure><img src={img} alt="Album"/></figure>
  <div  class="card-body my-5">
  <h2 class="card-title">Model : {model_No}</h2>
  <h2 class="card-title">Gold Weight : {gold_weight}</h2>
  <h2 class="card-title">Diamond Weight : {Diamond_weight}</h2>
  <h2 class="card-title">Stock : {stock} pcs</h2>
  <h2 class="card-title">Price : {price} $</h2>
  
  <div class="card-actions justify-center">
    <button class="btn btn-success my-3 rounded-0">Add to Card</button>
  </div>
</div>
</div> */}