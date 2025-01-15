const momet=require("moment")

const isDate=(value,{req,location,path})=>{
    if(!value){
        return false;
    }
    const date=momet(value);
    if (date.isValid()){
        return true;
    }else{
        return false;
    }
    
    
}

module.exports={isDate};