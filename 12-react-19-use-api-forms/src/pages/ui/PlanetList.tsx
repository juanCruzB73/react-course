import { useOptimistic, useState } from 'react';
import { updatePlanetAction } from '../../actions/update-planet.action';
import { Planet } from '../../interfaces/planet.interface';

interface Props {
  planets: Planet[];
}

export const PlanetList = ({ planets }: Props) => {
  
  const [newOptimisticPlanets,setNewOptimisticPlanets]=useOptimistic(planets,
    (current,newPlanet:Planet)=>{
      const updatedPlanet = current.map((planet)=>planet.id===newPlanet.id ? newPlanet : planet)
      return updatedPlanet;
    }
    
  );

  const handleUpdatePlanets = async(planet:Planet)=>{
    
    planet.name = planet.name.toUpperCase();
    setNewOptimisticPlanets(planet);
    const updatedPlanet = await updatePlanetAction(planet);
    
  }
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fadeIn">
      {newOptimisticPlanets.map((planet) => (
        <div key={planet.id} className="p-4 bg-gray-100 rounded shadow">
          <h2 className="text-xl font-semibold">{planet.name}</h2>
          <p className="text-gray-700">{planet.type}</p>
          <p className="text-gray-700">{planet.distanceFromSun}</p>
          <br />
          <button onClick={()=>handleUpdatePlanets(planet)} className='bg-blue-500 text-white p-2 rounded w-full'  >Actualizar</button>
        
        </div>
      ))}
    </div>
  );
};
