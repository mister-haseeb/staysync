import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar(){

  const {user,logout} = useContext(AuthContext);

  return(

    <nav>

      <h2>StaySync</h2>

      <div>

        <Link to="/">Home</Link>

        {user && <Link to="/create">Create Event</Link>}

        {user && <Link to="/my-events">My Events</Link>}

        {user && <Link to="/my-rsvps">My RSVPs</Link>}

        {!user && <Link to="/login">Login</Link>}

        {!user && <Link to="/register">Register</Link>}

        {user && <button onClick={logout}>Logout</button>}

      </div>

    </nav>

  )

}

export default Navbar;