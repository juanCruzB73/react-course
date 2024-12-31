const {response}=require("express");

const User = require("../models/User");

const createUser=async(req,res=response)=>{


    const {name,email,password}=req.body;

    try{

        const user = new User(req.body)

        await user.save();
    
        return res.status(201).json({
            ok:true,
            msg:"register",
            name,
            email,
            password
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"noup"
        })
    }


}

const  loginUser = (req,res=response)=>{

    const {email,password}=req.body;

    

    res.json({
        "ok":true,
        msg:"login",
        email,
        password
    })
}

const renewUser=(req,res=response)=>{
    
    res.json({
        "ok":true,
        msg:"renwe"
    })

}

module.exports={createUser,loginUser,renewUser}