import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  
    const {counter,increaseCounter,decrementCounter,resetCounter}=useCounter()
  
    return (
    <>
      <h1>Counter with hook: {counter}</h1>
      <hr />
    {/*al hacer un onClick se manda un evento si quiero pasarle argumentos a la funcion debe estar en una function*/}
    <button onClick={()=>increaseCounter(5)} className="btn btn-primary">+1</button>
    <button onClick={resetCounter} className="btn btn-primary">reset</button>
    <button onClick={decrementCounter} className="btn btn-primary">-1</button>
    </>
  )
}