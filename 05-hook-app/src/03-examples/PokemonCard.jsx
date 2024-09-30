import React, { useLayoutEffect, useRef } from "react";
export const PokemonCard = ({id,name,sprites=[]}) => {

  const nameRef=useRef();
  
  useLayoutEffect(()=>{
    console.log(nameRef.current.getBoundingClientRect());
  },[name])
  
  return (
    <section style={{heigth:200}}>
      <h2 ref={nameRef} className="text-capitalize">#{id}-{name}</h2>

      <div>
        {
            sprites.map(sprite=>(
                <img src={sprite} key={sprite} alt={name}/>
            ))
        }
      </div>
    </section>
  )
};