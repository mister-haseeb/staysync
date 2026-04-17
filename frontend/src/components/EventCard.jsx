import api from "../utils/api";

function EventCard({event}){

  const handleRSVP = async () => {

    await api.post(`/events/${event._id}/rsvp`);

    alert("RSVP updated");

  }

  return(

    <div className="card">

      <h3>{event.title}</h3>

      <p>{event.description}</p>

      <p>{event.location}</p>

      <p>{new Date(event.date).toDateString()}</p>

      <button onClick={handleRSVP}>
        RSVP
      </button>

    </div>

  )

}

export default EventCard;