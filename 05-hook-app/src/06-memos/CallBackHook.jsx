import { useCallback, useState } from "react";
import { IncreaseCounter } from "./IncreaseCounter";

export const CallBackHook = () => {
  
    const[counter,setCounter]=useState(10);

    const increase=useCallback(()=>{
        setCounter((value)=>value+1);   
    },[]);

    return (
    <>
        <h1>counter: {counter}</h1>
        <IncreaseCounter increase={increase}/>  
     </>
  )
}
