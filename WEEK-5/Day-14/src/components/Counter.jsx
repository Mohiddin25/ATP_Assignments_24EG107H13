import { useState } from "react";

function Counter(){
    const [count,setCount]=useState(0);

    // functions to modify the state
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }

    return(
        <div className="text-center p-10 border">
            <h1 className="text-2xl">Count:{count}</h1>
            <button className="bg-green-400 p-5" onClick={increment}>+</button>
            <button className="bg-red-400 p-5" onClick={decrement}>-</button>
        </div>
    )
}

export default Counter