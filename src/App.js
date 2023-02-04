import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import All from './Components/Allproduct/All';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import ProductDetails from './Components/productDetails/ProductDetails';
import Login from './Components/Login/Login';
import Cart from './ShoppingCart/Cart';
import Contact from './Components/CONTACT/Contact';
import Register from './Components/Login/Register';
import RequireAuth from './RequireAuth/RequireAuth';
import NavUpdated from './Components/NavUpdated/NavUpdated';
import ShowDetails from './Components/productDetails/ShowDetails';
import Nosepin from './Nosepin/Nosepin';
import Rings from './Rings/Rings';
import Footer from './Components/Footer/Footer';
import Know from './Know/Know';
import Know_2 from './Know/Know_2';
import EarRing from './Components/EarRing/EarRing';
import Azadsir from './Components/Directors/Azadsir';
import Uttamsir from './Components/Directors/Uttamsir';
import AllDirectors from './Components/Directors/AllDirectors';
import { useEffect, useState } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import Calculator from './Calculator/Calculator';


function App() {
  const [loading , setLoading] = useState(false);
    useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false);
              },3000)
} ,[])
  return (
    <div className="w-full object-conain">
      {
          loading ?
          (<PropagateLoader
      color={"#F19CBB"}
      loading={true}
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
            className='loader'
    />
    
    )
 
    :

    <>
      <NavUpdated></NavUpdated>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/all' element={<All></All>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/details/:id' element={
       
        
        <ProductDetails></ProductDetails>
        
        

        }></Route>
        <Route path='/rings' element={<Rings></Rings>}></Route>
        <Route path= '/nosepin' element={<Nosepin></Nosepin>}></Route>
        <Route path='/details' element={<ShowDetails></ShowDetails>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/cart/:id' element={<Cart></Cart>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/know' element={<Know></Know>}></Route>
        <Route path='/care' element={<Know_2></Know_2>}></Route>
        <Route path='/earring' element={<EarRing></EarRing>}></Route>
        <Route path='/azadsir' element={<Azadsir></Azadsir>}></Route>
        <Route path='/uttamsir' element={<Uttamsir></Uttamsir>}></Route>
        <Route path='/alldirectors' element={<AllDirectors></AllDirectors>}></Route>
        <Route path='/calculator' element={<Calculator></Calculator>}></Route>
      </Routes>
     <Footer></Footer>
     </>
      }
    
    </div>
  );
}

export default App;
