import heroes,{owners} from './data/heroes';

export const getHeroesById=(id)=>heroes.find(e=>e.id===id)
const hero1=getHeroesById(1);

export const getHeroeByOwner=(owner)=>heroes.filter(e=>e.owner===owner)
const heroesOwner=getHeroeByOwner("DC")

