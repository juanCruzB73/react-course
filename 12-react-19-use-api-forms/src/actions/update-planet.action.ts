import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const updatePlanetAction = async(planet:Planet)=>{
    try {
        const response = await planetsApi.patch<Planet>(`/${planet.id}`,planet);
        console.log("planeta actualizado");
        return response.data;
        
    } catch (error) {
        console.log(error);
        throw new Error("error actualizando planeta")
        
    }
}