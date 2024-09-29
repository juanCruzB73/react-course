import { useState } from "react";

export const userForm = (initialState={}) => {
  
    const [formState,setFormState]=useState(initialState);


    const onInputChange=({target})=>{
        const{name,value}=target;
        setFormState(
            {
            ...formState,
            [name]:value
        }
    );
    };

    const onResetForm=()=>{
        setFormState(initialState)
    }

    return {
       ...formState,//desestructura los elementos pasados en intial value
       formState,onInputChange,onResetForm
  }
}