import { useEffect,useState } from "react";
import api from "../utils/api";
import EventCard from "../components/EventCard";

function Home(){

  const [events,setEvents] = useState([]);

  useEffect(()=>{

    const fetchEvents = async()=>{

      const res = await api.get("/events");

      setEvents(res.data);

    }

    fetchEvents();

  },[]);

  return(

    <div>

      <h2>All Events</h2>

      {events.map(event=>(
        <EventCard key={event._id} event={event}/>
      ))}

    </div>

  )

}

export default Home;