import React from 'react';
import InfoCard from './InfoCard';
import('./Info.css');


const Info = () => {
    const CardArray = [
            {
                 _id : 1,  
              text : "Nosepin",
              des : "Premium quality nosepin in great budget.",
               bg: "bg-primary" ,
               url : "https://i.ibb.co/5v0vpGW/cat-nose.jpg", 
               to : '/nosepin'  
            },
            {   
              _id : 2,  
              text : "Rings",
              des : "A Ring can be the perfect option for your loved one's ",
              bg: "bg-secondary",
              url : "https://i.ibb.co/4phNgGT/1J5A1124.jpg",
              to : "/rings"    
            },
            {
              _id : 3,  
              text : "Ear Rings",
              des : "Now is the time to get a pair.",
              bg: "bg-primary",
              url : "https://i.ibb.co/tB1YRJc/BDL-LN-14.jpg",
              to : "/earring"     
            }

            
           



    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 my-5 mx-2' >
         

            {
                CardArray.map(x=> <InfoCard key={x._id} to={x.to} text={x.text} des={x.des} bg={x.bg} url={x.url}></InfoCard>)
            }
        </div>
    );
};

export default Info;