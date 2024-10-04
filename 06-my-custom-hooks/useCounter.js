import { useState } from "react"

export const useCounter=(initialValue = 1)=>{
    
    const [counter,setCounter]=useState(initialValue)

    const increaseCounter=(value=1)=>{
        setCounter(counter+value);
    }

    const decrementCounter=()=>{
        counter>initialValue && setCounter(counter-1);
    }
    
    const resetCounter=()=>{
        setCounter(initialValue);
    }

    return{
        counter,
        increaseCounter,
        decrementCounter,
        resetCounter,
    }
}