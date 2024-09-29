//import { useState } from "react";

import { userForm } from "../hooks/userForm";

export const FormWithCustomHook = () => {

    const intialValue={username:"",email:"",password:''}

    const {onInputChange,username,email,password,onResetForm}=userForm(intialValue);

    return (
    <>
        <h1>form with custom hook</h1>
        <hr />
        <input onChange={onInputChange} type="text" className="form-control" placeholder="username" name="username" value={username}/>
        <input onChange={onInputChange} type="email" className="form-control mt-2" placeholder="email" name="email" value={email} />
        <input onChange={onInputChange} type="password" className="form-control mt-2" placeholder="password" name="password" value={password} />
        <button onClick={onResetForm} className="btn btn-btn-primary mt-2" >Reset</button>
    </>
  )
}
