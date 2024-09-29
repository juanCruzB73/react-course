import { useState } from "react";

export const CounterApp = () => {
    const [state, setcounter] = useState({
        counter1:0,
        counter2:10,
        counter3:20,

    });
    const {counter1,counter2,counter3}=state
    const increaseCounter1=()=>{
        setcounter(
            {
                ...state,
                counter1:counter1+1,
            }
        )
    }

  return (
    <>
        <h1>counter1: {counter1}</h1>
        <h1>counter2: {counter2}</h1>
        <h1>counter3: {counter3}</h1>
        <hr />

        <button onClick={increaseCounter1}>counter1 +1</button>
        <button>counter2 +1</button>
        <button>counter3 +1</button> 
   </>
  )
}
