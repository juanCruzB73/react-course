import { planetsApi } from "../api/planetsApi";
import { Planet } from "../interfaces/planet.interface";

export const getPlanets = async ():Promise<Planet[]> => {
  console.log("Realizando la peticion http");
  const res = await planetsApi.get('/');
  return res.data;
};