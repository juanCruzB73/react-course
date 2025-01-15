const Events = require("../models/Events");
const getEvents=async(req,res)=>{

    const events=await Events.find().populate("user","name");

    //verify there is element
    res.json({
        ok:true,
        events:events,
    })
}

const createEvent=async(req,res)=>{
    //create event
    const event = new Events(req.body);

    try {
        event.user=req.uid;
        const savedEvent=await event.save()
        res.json({
            ok:true,
            event:savedEvent,
            msg:"event created with success"
        })
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:"internal error"
        })
    }
}

const updateEvent=async(req,res)=>{

    const eventId=req.params.id;
    const uid=req.uid;

    try {
        const event=await Events.findById(eventId);
        
        if(!event){
            return res.status(400).json({
                ok:false,
                msg:"event dont exist"
            })
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:"not allowed"
            });
        }

        const newEvent={
            ...req.body,
            user:uid
        }

        const updatedEvent =await Events.findByIdAndUpdate(eventId,newEvent)
        res.json({
            ok:true,
            event:updatedEvent,
            msg:"event edited with success"
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        })
    }

}

const deleteEvent=async(req,res)=>{
    const eventId=req.params.id;
    const uid=req.uid;

    try {
        const event=await Events.findById(eventId);
        
        if(!event){
            return res.status(400).json({
                ok:false,
                msg:"event dont exist"
            })
        }

        if(event.user.toString() !== uid){
            return res.status(401).json({
                ok:false,
                msg:"not allowed"
            });
        }

        await Events.findByIdAndDelete(eventId)
        res.json({
            ok:true,
            msg:"event deleted with success"
        })



    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:"internal error"
        })
    }
}

module.exports={getEvents,createEvent,updateEvent,deleteEvent}