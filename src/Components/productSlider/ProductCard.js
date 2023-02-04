import React from "react";


const ProductCard = props => {
  return (
    <>
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
</div>
    </>
  );
};

export default ProductCard;