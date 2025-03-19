// import React,{useState} from "react";
// console.log('render');
// function UseState(){
//     console.log('c render');
//     const[state,setFunction]=useState(0);
//     let increment = () => setFunction(state+10);
//     let zero = () => setFunction;
//     let decrement = () => setFunction(state-10);
    
//     return(
//         <div>
//             count : {state};
//             <br />
//             <button onClick={increment}>increment</button>
//             <button onClick={zero}>0</button>
//             <button onClick={decrement}>decrement</button>

//         </div>
//     )
// }

// export default UseState;

import React, { useState } from 'react'

function UseState() {
    const [value,setValue] = useState('teju')
    const onChange =  (e) =>  {
        setValue(e.value)
    }
  return (
    <div>
      <form action=''>
        <input
          type='text'
          placeholder='type anything'
          value={value}
          onChange={onChange}
        />
        <h1>value : {value}</h1>
      </form>
    </div>
  )
}

export default UseState