import { useEffect,useState } from "react";
import api from "../utils/api";

function MyEvents(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    const fetchEvents = async()=>{

      const res = await api.get("/events/my-events");

      setEvents(res.data);

    }

    fetchEvents();

  },[]);

  return(

    <div>

      <h2>My Events</h2>

      {events.map(e=>(
        <div key={e._id}>{e.title}</div>
      ))}

    </div>

  )

}

export default MyEvents;