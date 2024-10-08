import {heroes} from "../data/heroes";

export const getHeroesBySearch=(value='')=>{
    
    value=value.toLocaleLowerCase().trim();
    
    if(value.length===0)return[];

    return heroes.filter(hero=>hero.superhero.toLocaleLowerCase().includes(value))
}