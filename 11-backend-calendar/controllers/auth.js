const {response}=require("express");

const createUser=(req,res=response)=>{
    
    const {name,email,password}=req.body;

    if(name.length < 5){
        return res.status(400).json({
            ok:false,
            msg: "the name must contain 5 characters"
        })
    }

    return res.status(200).json({
        ok:true,
        msg:"register",
        name,
        email,
        password
    })

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