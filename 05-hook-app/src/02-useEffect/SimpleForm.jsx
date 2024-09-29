import { useState } from "react";
import { Message } from "./Message";
export const SimpleForm = () => {

    const [formState,setFormState]=useState({
        username:"elliot",
        email:"elliotalderson@gmail.com"
    });

    const {username,email}=formState;

    const onInputChange=({target})=>{
        const{name,value}=target;
        setFormState(
            {
            ...formState,
            [name]:value
        }
    );
    };


    return (
    <>
        <h1>simple form</h1>
        <hr />
        <input onChange={onInputChange} type="text" className="form-control" placeholder="username" name="username" value={username}/>
        <input onChange={onInputChange} type="email" className="form-control mt-2" placeholder="email" name="email" value={email} />
        <Message/>
    
    </>
  )
}
