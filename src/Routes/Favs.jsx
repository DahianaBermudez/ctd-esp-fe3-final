import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/global.context";


const Favs = () => {
  const { state } = useCharStates();

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((char) => (
        <Card key={char.id} char={char} />
      ))}
      </div>
    </>
  );
};

export default Favs;
