import React from "react";
import { useState } from "react";


const Form = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const [error, setError] = useState(false);
  
  const handleName = (e) => {
    setContact({ ...contact, name: e.target.value });
  };
  const handleEmail = (e) => {
    setContact({ ...contact, email: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", contact)
    if (
      contact.name.trim().length >= 6 
    ) {
      setError(false);
      console.log("Gracias" + " " + contact.name + " " + "te contactaremos cuanto antes vía email")
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
      <input type="email" onChange={handleEmail} />
      <button>Enviar</button>
    </form>
    {error ? (
      <h4 style={{ color: "red" }}>Por favor verifique su información nuevamente</h4>
    
  ) :null } 
  </div>
  );
};

export default Form;
