import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e)=>{

    e.preventDefault();

    await api.post("/auth/register",{
      name,
      email,
      password
    });

    navigate("/login");

  }

  return(

    <form onSubmit={handleSubmit}>

      <input placeholder="Name"
        onChange={(e)=>setName(e.target.value)}
      />

      <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button>Register</button>

    </form>

  )

}

export default Register;