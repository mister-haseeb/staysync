import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function CreateEvent(){

  const [title,setTitle] = useState("");
  const [location,setLocation] = useState("");
  const [date,setDate] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    await api.post("/events",{
      title,
      location,
      date
    });

    navigate("/");

  }

  return(

    <form onSubmit={handleSubmit}>

      <input placeholder="Title"
        onChange={(e)=>setTitle(e.target.value)}
      />

      <input placeholder="Location"
        onChange={(e)=>setLocation(e.target.value)}
      />

      <input type="date"
        onChange={(e)=>setDate(e.target.value)}
      />

      <button>Create Event</button>

    </form>

  )

}

export default CreateEvent;