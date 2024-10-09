import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

    const {isLoading,page,pokemon=[]}=useSelector(state=>state.pokemon)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getPokemons());
    },[])

  return (
    <div>
      pokemon app
      <hr />
      <span>{isLoading && <p>...Loading</p>}</span>
      <ul>
        {
            pokemon.map(po=>( <h3>{po.name}</h3> ))
        }
    </ul>
    <button disabled={isLoading}  onClick={()=>dispatch(getPokemons(page))}>more pokemon</button>
    </div>
  )
}