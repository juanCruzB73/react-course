const characters=['elliot','mrRobot','darlyn'];
const[ , , c ]=characters;
const returnArray=()=>{
    return ['ABC',123];
}
const [letras, numeros]=returnArray();
console.log(letras, numeros);

const fnArr=(value)=>{
    return [value,()=>{console.log("hello")}]
}
const [name,setNombre]= fnArr('elliot');
console.log(name)
setNombre();