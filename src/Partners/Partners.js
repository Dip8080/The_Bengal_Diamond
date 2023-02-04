import Zaya from '../Image/Zaya.jpg'
import Jarwa from '../Image/Jarwa.png'
import Fancy from '../Image/Fancy.png'
import Apan from '../Image/Apan.jpg'
import React from 'react';
import('./Partners.css');

const Partners = () => {
    return (
        <div className='grid lg:grid-cols-4 lg:mx-6 lg:px-4 my-5 p-2'>
        <div class="card w-96 bg-base-100 shadow-xl rounded">
  <figure><img src={Apan} className='partnerCard' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Apan Jewellers</h2>
    <p>click the link bellow for the address.</p>
    
  </div>
  <div className='flex space-x-1 mx-0 py-1 overflow-scroll'>
  <button  className='btn rounded bg-orange-100 w-3/2 py-1 border-0'><a href='https://www.google.com/maps/dir//apon+jewellers+baitul+mukarram/@23.7392764,90.4101437,15z/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x3755b8f7c4ebe649:0x92d7b0892ee85a77!3e0'>outlet-1</a></button>

  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir/23.7508483,90.4031032/apan+jewellers+gulshan/@23.7645677,90.3928157,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755c79c3b1e6cf1:0xf1419462f7d16604!2m2!1d90.4167179!2d23.7835311'>outlet-2</a></button>

  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//Plot+2A%2F2B,+Road+-+Main+Road+-3,+Block+-+A,+Dhaka/@23.814561,90.2966663,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c1af6be448a7:0x3bf686fd18dd317b!2m2!1d90.3667067!2d23.8145768'>outlet-3</a></button>
  
  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//Parbata+Tower,+Plot-+13,+Ground+Floor,+Rahman+Complex,+Road-+1,+Senpara+Porbota+East+Side+Of,+Dhaka+1216/@0,0,22z/data=!4m6!4m5!1m0!1m2!1m1!1s0x3755c0d696fa016d:0x2644a0e308fb6f0b!3e0?gl=bd'>outlet-4</a></button>
  
  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//69,+1230+Rd+No+6,+Dhaka+1230/@23.8627627,90.2324856,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c427a34dd833:0xef62800433ba8252!2m2!1d90.400396!2d23.8598492'>outlet-5</a></button>
  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//2,+3,+4,+Shimanto+Squre,+Road+No.+2,+Dhaka+1209/@23.7380165,90.3071435,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b9b70e950e13:0x72fbb03afa77b1da!2m2!1d90.3771839!2d23.7380323'>outlet-6</a></button>
  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//VC52%2BW5J,+Dhaka+1230/@23.8598152,90.3303494,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c56531d6a86b:0x86fbc13d2c535baf!2m2!1d90.4003995!2d23.8598371'>outlet-7</a></button>
  
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl rounded">
  <figure><img src={Jarwa} className='partnerCard' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Jarwa House</h2>
    <p>click the link bellow for the address.</p>
    
  </div>
  <div className='flex space-x-8 mx-16 py-1'>
  <button  className='btn rounded bg-orange-100 w-3/2 py-1 border-0'><a href='https://www.google.com/maps/dir//Molly+Capita+Centre,+76+Gulshan+Ave,+Dhaka+1212/@23.783995,90.3473223,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755c798d2850a8b:0xaab185178a8e8307!2m2!1d90.4173627!2d23.7840108'>outlet-1</a></button>

  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir//Suite-+DI,+House+No:+17%2F1,+Shaptak+Mahbuba+Grandeur,+Road+No:+6,+Dhanmondi+R%2FA,+Dhaka+1205/@23.7432318,90.3121968,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b8b71f4019e3:0x340411011ac4f0fe!2m2!1d90.3822372!2d23.7432476'>outlet-2</a></button>
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl rounded">
  <figure><img src={Zaya} className='partnerCard' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Zaya Diamond And Gold</h2>
    <p>click the link bellow for the address.</p>
    
  </div>
  <div className='flex space-x-8 mx-16 py-1'>
  <button  className='btn rounded bg-orange-100 w-3/2 py-1 border-0'><a href='https://www.google.com/maps/dir/23.7568,90.3872512/zaya+gold+and+diamond/@23.7747251,90.3991101,13.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755c7a134c00001:0xdfd9526dddd00d2!2m2!1d90.4158318!2d23.7923819'>outlet-1</a></button>

  <button  className='btn rounded bg-orange-100 w-3/2 border-0'><a href='https://www.google.com/maps/dir/23.7568,90.3872512/zaya+gold+and+diamond/@23.7747251,90.3991101,13.5z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755c7a134c00001:0xdfd9526dddd00d2!2m2!1d90.4158318!2d23.7923819'>outlet-2</a></button>
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl rounded">
  <figure><img cla src={Fancy} className='partnerCard' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">Fancy Jewellers</h2>
    <p>click the link bellow for the address.</p>
    
  </div>
  <div className='flex space-x-3 mx-5  overflow-scroll p-2 '>
  <button  className='btn rounded bg-orange-100 w-3/2 py-1 border-0'><a href='https://www.google.com/maps/dir/23.7568,90.3872512/fancy+jewellers+google+map/@23.7888998,90.3715033,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755c64da4fe17cf:0x1f3b315512e75a8f!2m2!1d90.424484!2d23.8137212'>outlet-1</a></button>

  <button  className='btn rounded bg-orange-100  w-3/2 border-0'><a href='https://www.google.com/maps/dir/23.7568,90.3872512/fancy+jewellers+bashundhara+city+google+map/@23.7536917,90.3865371,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3755b8a336bd7d4f:0x925873f6583a1d3d!2m2!1d90.3903606!2d23.7513197'>outlet-2</a></button>
 
  <button  className='btn rounded bg-orange-100  w-3/2 border-0'><a href='https://www.google.com/maps/dir//Room-+18,+Building-+2,+Chandni+Chowk+Market,+3,+2+Mirpur+Rd,+Dhaka+1205/@23.7341852,90.315348,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b8c61488a7e3:0x6d53c1ea6081085c!2m2!1d90.3853884!2d23.734201'>outlet-3</a></button>
  </div>
</div>
        <div class="card w-96 bg-base-100 shadow-xl rounded my-2">
  <figure><img cla src="https://i.ibb.co/bNPNFrK/277775438-489138466111474-8330134562908222783-n.jpg"className='partnerCard' alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">General Jewellers</h2>
    <p>click the link bellow for the address.</p>
    
  </div>
  <div className='flex space-x-8 mx-16 p-2 '>
  <button  className='btn rounded bg-orange-100 w-3/2 py-1 border-0'><a href='https://www.facebook.com/generaljewellers/'>outlet-1</a></button>

  <button  className='btn rounded bg-orange-100  w-3/2 border-0'><a href='https://www.facebook.com/generaljewellers/'>outlet-2</a></button>
  </div>
</div>
        
</div>
    );
};

export default Partners;