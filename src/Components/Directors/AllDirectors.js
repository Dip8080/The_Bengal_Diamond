import uttam from '../../Dir_Images/Uttam_sir.jpg'
import azad from '../../Dir_Images/azad_sir.jpg'
import topu from '../../Dir_Images/topu_sir.jpg'
import opu from '../../Dir_Images/opu_sir.jpg'
import ratna from '../../Dir_Images/Ratna_banik.jpg'
import lincoln from '../../Dir_Images/lincoln_sir.jpg'
import anindita from '../../Dir_Images/anindita_maam.jpg'
import satabdi   from '../../Dir_Images/satabdi_maam.jpg'
import Kaniz   from '../../Dir_Images/kaniz_maam.jpg'
import gm    from '../../Dir_Images/GM_sir.jpg' 

import { positions } from '@mui/system';
import React from 'react';

const directors = [
    {
        id : 1,
        name : "Azad Ahmed",
        positions : "Chairman",
        img : {azad},
        img2 : "https://i.ibb.co/mcJnk7X/azad-sir.jpg"

    },
    {
        id : 2,
        name : "Uttam Banik",
        positions : "Managing Director",
        img :  {uttam},
        img2 : "https://i.ibb.co/gj4MxTB/Uttam-sir.jpg"
        
    },
    {   
        id  : 3,
        name : "Anwar Hossain",
        positions : "Director",
        img : {Kaniz},
        img2 : "https://i.ibb.co/s5077wd/anwar-sir.jpg"
    },
    {
        id : 4,
        name : "Fahad Kamal Lincoln",
        positions : "Director",
        img :  {lincoln},
        img2 : "https://i.ibb.co/HHWvJSG/lincoln-sir.jpg"
    },
    {
        id : 5,
        name : "Anindita Roy",
        positions : "Director",
        img :  {anindita},
        img2 : "https://i.ibb.co/FD23VXk/anindita-maam.jpg"
    },
    {
        id : 6,
        name : "Kaniz Fatema",
        positions : "Director",
        img :  {Kaniz},
        img2 : "https://i.ibb.co/TtxZJJs/kaniz-maam.jpg"
    },
    {
        id : 7,
        name : "Shaikh Golam Mustofa Kamal",
        positions : "Director",
        img :  {gm},
        img2 : "https://i.ibb.co/D8fhcrG/GM-sir.jpg"
    },
    {
        id : 8,
        name : "Amit Ghosh",
        positions : "Director",
        img :  {topu},
        img2 : "https://i.ibb.co/qxFdbtS/topu-sir.jpg"
    },
    {
        id : 9,
        name : "Ratna Banik",
        positions : "Director",
        img :  {ratna},
        img2 : "https://i.ibb.co/g7732W5/Ratna-banik.jpg"
    },
    {
        id : 10,
        name : "Satabdi Ghosh",
        positions : "Director",
        img :  {satabdi},
        img2 : "https://i.ibb.co/WySJYLb/satabdi-maam.jpg"
    },
    {
        id : 11,
        name : "Shamit Ghosh",
        positions : "Director",
        img : {opu},
        img2 : "https://i.ibb.co/T04Tk0P/opu-sir.jpg"
    }





]

const AllDirectors = () => {
    return (
        <div className='allDir'>
        <div>
            <h1 className='text-2xl text-center uppercase shadow-2xl shadow-cyan-500/50 p-3 h_one my-6 h_one'>honourable directors of Bengal Diamond Limited</h1>
        </div>
        <div className='grid lg:grid-cols-3 '>
            {
                directors.map(x=><SingleDirector key={x.id} img2={x.img2} name={x.name} positions={x.positions} img={x.img}></SingleDirector>)
            }
        </div>
        </div>
    );
};

const SingleDirector =({name,positions,img,img2})=>{

return(

   
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded p-2 my-2 shadow-cyan-500/50">
    <div className='avatar p-6 mx-5'>
    <div className=' w-64 rounded-full p-2'><img src={img2} alt="Director" /></div>
    </div>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{positions}</p>
      
    </div>
  </div>
// )

)
}


export default AllDirectors;