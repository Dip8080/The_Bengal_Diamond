import { useEffect, useState } from "react"
import ReactWhatsapp from "react-whatsapp"




const EarRing = () =>{
const [nosepin, setNosepin] = useState([])
useEffect(()=>{
    fetch('earRing.json')
    .then(res=>res.json())
    .then(data=>setNosepin(data))
},[])
return (
    
    
    <div>
        <div>
        <h1 className="text-center text-2xl shadow text-orange-300 p-2">Ear rings</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">        
        {
            
            nosepin.map(x=> <EarRingDetils diamondWeight={x.Diamond_weight}
                 diamondPieces={x.Diamond_pices}
                 img={x.img}
                gold_weight={x.gold_weight}
                 model={x.model_No
                } key={x.id}
                
                 ></EarRingDetils>)
        }
        </div>

    </div>
)
}
const EarRingDetils= ({diamondWeight,diamondPieces,img,gold_weight,model,img2}) =>{

    return (
        <div class="ns_main_div bg-gray-100 flex justify-center items-center shadow-yellow-500/50">
        <div class="container flex justify-center">
          <div class="max-w-sm py-32">
            <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg shadow-blue-500/50">
              {/* product slider */}
              <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img src={img} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <span class="">❮</span> 
      <span class="">❯</span>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src={img} class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <span href="" class="">❮</span> 
      <span href="" class="">❯</span>
    </div>
  </div> 
</div>

              <div class="py-6 px-8 rounded-lg bg-white">
                <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer"> {model}</h1>
                <p class="text-gray-700 tracking-wide">Diamond weight : {diamondWeight}</p>
                <p class="text-gray-700 tracking-wide">Gold weight : {gold_weight}</p>
                
                <ReactWhatsapp number='+8801758907846' class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300" message={`hello, i would like to purchase, Model no: ${model} `}>Buy now</ReactWhatsapp>
              </div>
              <div class="absolute top-2 right-2 py-2 px-4  rounded-lg">
                <span class="text-md bg-red-500 p-1 rounded">New</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}




export default EarRing;