const person={
    name:"elliot",
    surname:'alderson',
    edad:29,
    adress:{
        city:'new york',
        zip:'adas'
    },
};
const person2=person;//copia memoria, un cambio en persona2 se releja en persona
const personCorrect={...person}
console.log({person:person})
