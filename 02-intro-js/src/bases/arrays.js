//const array=new Array(10);
const array=[1,2,3,4,5];
//no usar push porque altera el arreglo
//usar operador spread
const array2=[...array];
const array3=array.map((num)=>{//map crea un nuevo arreglo
    return num*2
});
array2.push(5);
console.log(array);
console.log(array2);