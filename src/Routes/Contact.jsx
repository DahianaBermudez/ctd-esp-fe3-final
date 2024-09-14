import React from 'react'
import Form from '../Components/Form'
import { useState } from "react";


const Contact = () => {
  const [pet, setPet] = useState({
    name: "",
    like: "",
  });

  const [error, setError] = useState(false);
  
  const handleName = (e) => {
    setPet({ ...pet, name: e.target.value });
  };
  const handleLike = (e) => {
    setPet({ ...pet, like: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", pet)
    if (
      pet.name.trim().length >= 6 
    ) {
      setError(false);
      console.log("Gracias" + " " + pet.name + " " + "te contactaremos cuanto antes vía email")
    } else {
      setError(true);
    }
  };
  return (
       <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" onChange={handleName} />
        <label>Email: </label>
        <input type="email" onChange={handleLike} />
        <button>Enviar</button>
      </form>
      {error ? (
        <h4 style={{ color: "red" }}>Por favor verifique su información nuevamente</h4>
      
    ) :null } 
    </div>
  )
}

export default Contact