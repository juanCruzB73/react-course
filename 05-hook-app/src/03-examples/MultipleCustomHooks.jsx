import React from "react"
import { useFetch,useCounter } from "../hooks/index"
import { LoadingMessage,PokemonCard } from "./index"

export const MultipleCustomHooks = () => {
    const {counter,increaseCounter,decrementCounter}=useCounter(1)

    const api=`https://pokeapi.co/api/v2/pokemon/${counter}`;
    const {data,isLoading,hasError}=useFetch(api);  

  return (
    <>
      <h1>Información de pokemon</h1>
      <hr />
      {isLoading ? <LoadingMessage/> : <PokemonCard id={data?.id} name={data?.name} 
      sprites={[
        data.sprites.front_default,
        data.sprites.front_shiny,
        data.sprites.back_default,
        data.sprites.back_shiny,
        ]}/>}
      <button onClick={()=>decrementCounter()} className="btn btn-primary">Anterior</button>
      <button onClick={()=>increaseCounter()} className="btn btn-primary">Siguiente</button>
    </>
  )
}