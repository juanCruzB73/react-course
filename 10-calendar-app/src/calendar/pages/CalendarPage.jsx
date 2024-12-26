import { Calendar } from 'react-big-calendar'
import { addHours} from 'date-fns'
import { localizer,getMessagesES } from '../../helpers'
import { NavBar } from "../"
import "react-big-calendar/lib/css/react-big-calendar.css"

const events=[{
  title:"take down e-corp",
  notes:"load the script",
  start:new Date(),
  end:addHours(new Date(),2 ),
  bgColor: "#fafafa",
  user:{
    _id:"1",
    name:"Elliot"
  }
}]

const eventStyleGetter = (event,start,end,isSelected)=>{
  console.log({event,start,end,isSelected});
  const style={
    backgroundColor: "#347CF7",
    borderRadius:"0px",
    opacity:"0.8",
    color:"white"
  }
  return{
    style
  }
  
} 

export const CalendarPage = () => {
  return (
    <>
      <NavBar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
    />
    </>
  )
}
