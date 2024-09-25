import { useState } from 'react';
import {AddCategory,GifGrid} from './components/index.js'

export const GifExpertApp=()=>{
    
    const [categories,setCategories]=useState(['elliot alderson']);
    
    const onAddCategory=(newCategoy)=>{
        
        if(categories.includes(newCategoy))return;//si la categoria esta incluida no la agrega
        
        //setCategories([...categories,newCategoy])
        setCategories([newCategoy])
        
    }

    return (
        <>
            {/*TITULO*/}
            <h1>Gif app</h1>
             {/*INPUT*/}
            <AddCategory onNewCategory={onAddCategory}/>{/*add category recive el metodo setCategory para usarlo*/}    
            {/*lista de gifs*/}
                {/*gif item*/}
            <ol>
                {
                    categories.map(cateogory=> (
                        <GifGrid key={cateogory} category={cateogory}/>
                    ))
                }
            </ol>
        </>
    )   
}