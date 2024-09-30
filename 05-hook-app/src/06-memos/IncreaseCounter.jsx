import React from "react"

export const IncreaseCounter = React.memo(({increase}) => {
    console.log("me volvi a generar")
    return (
    <>
        <button onClick={()=>increase()}>+1</button>
    </>
  )
})
