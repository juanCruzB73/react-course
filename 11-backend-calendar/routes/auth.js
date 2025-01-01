/*
    ROUTAS DE USUSARIOS / AUTH
    HOST + /API/AUTH
*/

const {Router}=require("express");
const {check}=require("express-validator")
const {createUser,loginUser,renewUser}=require("../controllers/auth");
const { fieldValidator } = require("../middlewares/fieldValidator");
const { tokenValidator } = require("../middlewares/tokenValidator");


const router=Router();

//route,middleware,controller

router.post("/new",
    [
        check("name","name is necesary").not().isEmpty(),
        check("email","email is necesary and must contain @ and .com").isEmail(),
        check("password","password is necesary and must contain more that 6 characters").isLength({min:6}),
        fieldValidator
    ],
    createUser);
router.post("/",
    [
        check("email","email is necesary and must contain @ and .com").isEmail(),
        check("password","password is necesary and must contain more that 6 characters").isLength({min:6}),
        fieldValidator
    ]
    ,loginUser); 
router.get("/renew",tokenValidator,renewUser)

module.exports=router