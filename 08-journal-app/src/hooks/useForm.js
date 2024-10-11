import { useEffect, useMemo, useState } from "react";

export const useForm = (initialState={},formValidations={}) => {
  
    const [formState,setFormState]=useState(initialState);

    const [formValidation,setFormValidations]=useState({});


    useEffect(()=>{
        createValidations();
    },[formState])

    const onInputChange=({target})=>{
        const{name,value}=target;
        setFormState(
            {
            ...formState,
            [name]:value
        }
    );
    };

    const isValidForm=useMemo(()=>{
        
        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue]!==null) return false;
        }
        
        return true;
    },[formValidation])

    const onResetForm=()=>{
        setFormState(initialState)
    }

    const createValidations=()=>{
        const formCheckValues={}
        for (const formField of Object.keys(formValidations)) {
            const [fn,errorMessage="campo obligatorio"]=formValidations[formField];
            formCheckValues[`${formField}Valid`]=fn(formState[formField]) ? null : errorMessage;
        }
        setFormValidations(formCheckValues);
    }

    return {
       ...formState,//desestructura los elementos pasados en intial value
       formState,onInputChange,onResetForm,...formValidation,isValidForm,
  }
}