import {useState} from "react"

export const AddCategory=({onNewCategory})=>{
    
    const [inputValue,setInputValue]=useState("");
    
    //cambia el input a medida que se escribe y lo guarda en input value
    const onInputChange=({target})=>{
        setInputValue(target.value)
    }
    //manda el inputValue a cateogies usando el setCategories exportado arriba
    const onSubmit=(event)=>{
        event.preventDefault();
        if(inputValue.trim().length<=1)return;
        //setCategories(categories=>[...categories,inputValue]);
        onNewCategory(inputValue.trim().toLowerCase())
        setInputValue('');
    }
    return(
        <>
            <form onSubmit={onSubmit}>    
                <input type="text" placeholder="buscar gif" onChange={ onInputChange} value={inputValue}/>
            </form>
        </>
    )
}