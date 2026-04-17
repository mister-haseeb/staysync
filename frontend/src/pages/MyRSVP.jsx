import { useEffect, useState } from "react";
import api from "../utils/api";

function MyRSVP() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (!token) return;

  const fetchRSVP = async () => {
    try {
      const res = await api.get("/events/my-rsvps");
      setEvents(res.data);
    } catch (error) {
      console.log(error.response?.data);
      setEvents([]);
    }
  };

  fetchRSVP();
}, []);

  return (
    <div>
      <h2>Events I Joined</h2>

      {events.map((e) => (
        <div key={e._id}>{e.title}</div>
      ))}
    </div>
  );
}

export default MyRSVP;