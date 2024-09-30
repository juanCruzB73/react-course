import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
  
  const {counter,increaseCounter}=useCounter();  
  
    return (
    <>
     <h1>Counter:<Small value={counter} /></h1>
     <hr/>
     <button onClick={()=>{increaseCounter()}}>+1</button> 
    </>
  )
}
