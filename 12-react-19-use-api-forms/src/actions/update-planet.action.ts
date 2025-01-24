import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";


const sleep = async()=>{
    return new Promise((r)=>setTimeout(r,200))
}

export const updatePlanetAction = async(planet:Planet)=>{
    try {
        await sleep();
        throw new Error("Error de prueba");
        const response = await planetsApi.patch<Planet>(`/${planet.id}`,planet);
        console.log("planeta actualizado");
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw new Error("error actualizando planeta")
        
    }
}