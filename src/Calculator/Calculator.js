import React, { useState } from 'react' ;

const Calculator= () => {
    const [input_one, setInputOne] = useState(0);
    const [input_two, setInputTwo] = useState(0);
    const [input_three, setInputThree] = useState(0);
    const[input_four,setInputFour] = useState(0);
    const [result , setResult] = useState(input_one);
    const[price1 , setPrice1] = useState(input_one);
    const [result_two, setResult_two] = useState(input_two);
    const [result_three, setResult_three] = useState(input_three);
    const [result_four,setResult_four] = useState(input_four) 
    const HandleBtn=()=>{
        setResult(input_one*.7428);
        setPrice1(result*80000)
    }
    const HandleBtn2=()=>{
        setResult_two(input_two+(input_two*.252))
    }
    const HandleBtn3=()=>{
        setResult_three((input_three*999.9)/750) 
    }
    const HandleBtn4=()=>{
        setResult_four(input_four*11.664);
    }
    return (
        <div>
        <h1 className='uppercase text-2xl p-3 my-2 text-center'>Calculator</h1>
        <div className='p-5 grid lg:grid-cols-4 gap-3 '  >
            <div className='border p-6 my-6 shadow-md shadow-green-900'>
              <h1 className='p-5 my-5 text-2xl shadow-2xl shadow-green-900'>Enter Gold Weight in-18k</h1>
              <input placeholder={input_one} className='input rounded bg-green-800' type="number" onChange={e=>setInputOne(parseFloat(e.target.value))}></input>              
               <button className='btn text-black p-2 rounded block align-center  my-3 bg-green-200' onClick={HandleBtn}> Calculate</button> 
                <h1> Weight in 24k- <span className='font-bold'> {result} gm </span></h1>
                {/* <h1> Price calculated in BDT <span className='font-bold'> {price1} Taka </span></h1> */}
            </div>
            <div className='border p-6 my-6 shadow-md  shadow-green-900' >
                <h1 className='p-5 my-3 shadow-2xl shadow-green-900 text-2xl'>Enter Gold weight in-24k (99.05)</h1>
                <input placeholder={input_two} className="input rounded  bg-green-800" type='number' onChange={e=> setInputTwo(parseFloat(e.target.value))} ></input>
            <button onClick={HandleBtn2} className='btn text-black bg-green-200 rounded block  my-3 p-2'> Calculate</button>
            <h1> weight in 18k- <span className='font-bold text-1xl'> {result_two} gm </span></h1>
            
            </div>
            <div className='border p-6 my-6 shadow-md  shadow-green-900'> 
                <h1 className='p-5 my-3 shadow-2xl text-2xl shadow-green-900'>Enter gold weight in -24k(99.99)</h1>
                <input placeholder={input_three} className='input border rounded bg-green-800' type="number" onChange={e=>setInputThree(parseFloat(e.target.value))}></input>  
                             
                <button onClick={HandleBtn3} className='btn text-black rounded block align-center my-2 bg-green-200'> Calculate</button>
             <h1 className='p-2 my-3'> Weight in 18k- <span className='font-bold text-1xl '> {result_three} </span> </h1>   
            </div>
            <div className='border p-6 my-6 shadow-md  shadow-green-900'> 
                <h1 className='p-5 my-3 shadow-2xl text-2xl shadow-green-900'>Enter gold weight in Vori</h1>
                <input placeholder={input_four} className='input rounded border bg-green-800' type="number" onChange={e=>setInputFour(parseFloat(e.target.value))}></input>              
                <button onClick={HandleBtn4} className='btn text-black rounded block align-center my-2 bg-green-200'> Calculate</button>
             <h1 className='p-2 my-3'>Gold Weight in gm <span className='font-bold text-1xl '> {result_four} </span> </h1>   
            </div>
            </div>
        </div>
    );
};

export default Calculator;
