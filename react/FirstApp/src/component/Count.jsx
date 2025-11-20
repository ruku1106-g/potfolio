import React, { useState,useEffect } from 'react';

export default function Count() {
//    let count =1; this we cant use because we ened the count to be incremented we cant keep that constant
let[count, setCount] = useState(1);   // this wil accept the inital value which is 0  and let [count] is a name of the variablen  and for perfoming the function we will name it as setCount which is a state Handler its a function
//datatype[variable,state handler] = useState(inital number);

//using normal function increment
function inc()  {
setCount(count++); // so here setCount excepts a new value 
}

//using arrow function decrement
let [sub,setSub] = useState(10);
//  const dec = () => {   can use this arrow function as well or directly pass it in the button itself
//      setSub(sub = sub-1)
//  }

//reset
const reset = () => {
setCount(1);
setSub(10);
}

//
let[mes,setMes] = useState(" "); //secret message dispaly


//useEffecft hook
useEffect(()=>console.log("u clicked on a button")) //this will be execute only once after returing all the stataments

//atomatically the count should increase like 1 2 3 
let[counts,setCounts]=useState(0); 
useEffect(() =>{
    setTimeout(()=>{
        setCounts(counts+1)
    },1000);
});

return (
    <div>
      <button onClick={inc}> Increment</button> {/*when i click a button it should perform the function inc*/}
        <h1> Count is {count}</h1> 

    <br>
    </br> {/*in react opening and closing is must */}
    <br>
    </br>
    
    <button onClick={() =>setSub(sub-1)}>Decrement </button> {/*directly we can make like this insread of function*/}
     <h1> sub is {sub}</h1> 
     <br>
     </br>
     <br>
     </br>
<button onClick={reset} >Reset</button> 
 {/* or here also we can make use without arraow function
   {() => {setCount(1);(setSub(10);}} */}

{/* secret message */}
   <h1>{mes}</h1>
<button onClick={()=>{setMes("hello Arjun")}}>Click me</button>
    

    {/* atomatically the count should increase like 1 2 3 */}
    <h2>You count is{counts}</h2>
   
    </div>
  );
}

// make use of arrow function in react because it is mostly used in react
