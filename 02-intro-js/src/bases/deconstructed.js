
const person={
    name:'elliot',
    surname:'alderson',
    age:'29',
    phrase:'hello friend',
}
//desestructuracion

const personDecostructed=( {name,surname,phrase,clave='123',age})=>{
    //extrae la propiedad en {} de person
    //console.log(name,surname,phrase)
    return{
        nombreclave:clave,
        age:age,
        latlon:{
            lat:2121,
            lon:8982,
        },
    }
};
const {nombreclave,age,latlon}=personDecostructed(person);
const {lat,lon}=latlon;
console.log(nombreclave,age,lat,lon);
