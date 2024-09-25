import { GifGridItem } from "./GifGRidItem";
import {useFetch} from '../hooks/useFetchGifs'

export const GifGrid=({category})=>{
    
    const {images, isLoading}=useFetch(category);

    return(
        <>
            <h1>{category}</h1>
            
            {isLoading && <h2>CARGANDO...</h2>}
           
            <div className="card-grid">
                {
                images.map(img=>(
                    <GifGridItem key={img.id} {...img}/> 
                ))
                }
            </div>            
        </>
    )
}