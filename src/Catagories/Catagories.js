import React from 'react';
import('./Catagories.css')

const catagoryArray = [
    {
        img : "https://i.ibb.co/xSD8r6P/Cat-1.jpg",
        text : "Anniversary Gifts"

    },
    {
        img : "https://i.ibb.co/YWpN5Sq/cat-2.jpg",
        text : "Ear Rings"

    },

    {
        img : "https://i.ibb.co/bm4X5Df/cat-3.jpg",
        text : "Nosepin",
        

    },

    {
        img : "https://i.ibb.co/ZTXDZzm/cat-4.jpg",
        text : "Pendent"

    }
        ,    
        {
            img : "https://i.ibb.co/bBQvv68/cat-5.jpg",
            text : "Rings"

        },

        {
            img : "https://i.ibb.co/x5GLp1W/cat-6.jpg",
            text : "Other jewellery"

        },

        {
            img : "https://i.ibb.co/PwBYhwY/cat-7.jpg",
            text :  "Solitires"

        }

       
        
       


       



]

const Catagories = () => {
    return (
        <div className='flex lg:hidden  overflow-scroll my-5'>
            
                {

                    catagoryArray.map(x=><SingleCard key={x._id} 
                    
                            img={x.img} text= {x.text}
                    
                    ></SingleCard>)

                }

        </div>
    );
};

const SingleCard = ({img,text})=>{

    return (
        <>
        <div class="avatar p-1 grid grid-cols">
        <div class="w-28 mask mask-squircle mx-2">
          <img src={img} />

       
        
           
       
        </div>
        {/* <h1>{text}</h1> */}
        {/* hello */} 
        
        <div>
        <h1 className='mx-5 px-2 subpixel-antialiased text-sm'> {text}</h1>
        </div>        
      </div>
      </>


    )

}

export default Catagories;