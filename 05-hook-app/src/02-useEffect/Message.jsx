import { useEffect, useState } from "react";


export const Message = () => {
    const [cords,setCords]=useState({x:0,y:0})

    useEffect(()=>{

        const onMouseMove=({x,y} )=>{
            let cords={x,y};
            setCords(cords)
        }
        window.addEventListener('mousemove',onMouseMove);

        return ()=>{
            window.addEventListener('mouse',onMouseMove)
        }
    },[]);

  return (
    <>
        <h3>usuario ya existe</h3>
        {JSON.stringify(cords)}
    </>
  ) 
}
