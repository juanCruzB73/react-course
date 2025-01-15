/*
    ROUTAS DE USUSARIOS / EVENTS
    HOST + /API/EVENT
*/
const {Router}=require("express");
const {fieldValidator}=require("../middlewares/fieldValidator");
const {tokenValidator}=require("../middlewares/tokenValidator");
const {getEvents,createEvent,updateEvent,deleteEvent}=require("../controllers/events");
const { check } = require("express-validator");
const { isDate } = require("../helpers/isDate");

const router = Router();

router.use(tokenValidator);

router.get("/",getEvents);
router.post("/",[
    check("title","the title is necesary").not().isEmpty(),
    check("start","the start hour is necesary").custom(isDate),
    check("start","the end hour is necesary").custom(isDate),
    fieldValidator,
],createEvent);
router.put("/:id",updateEvent);
router.delete("/:id",deleteEvent);

module.exports=router;