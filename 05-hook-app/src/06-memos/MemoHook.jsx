import { useState,useMemo } from "react";
import { useCounter } from "../hooks"

export const MemoHook = () => {
    const [show,setShow]=useState(true);  
    const {counter,increaseCounter}=useCounter(5000);  
    const heavyStuf=(iterationNumber)=>{
      for(let i=0;i<iterationNumber;i++){
        console.log("interación")
      }
    } 
    const memorizedValue=useMemo(()=>heavyStuf(counter),[counter])
    return (
    <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr/>
        <h4>{memorizedValue}</h4>
        <button onClick={()=>{increaseCounter()}}>+1</button> 
        <button onClick={()=>setShow(!show)} >show/hide {JSON.stringify(show)}</button>
    </>
  )
}
