import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/global.context";

const Card = ({ char }) => {

  const { state, dispatch } = useCharStates();
  const isFav = state.favs.find((fav) => fav.id == char.id);

  const addFav = () => {
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: char });
  };


  return (
    <div className="card">
        <div>
        <img src="/images/doctor.jpg" alt='doctor-logo' />
      <p>{char.username} {char.id} </p>
      <Link to={"/dentist/" + char.id}>
        <h3>{char.name}</h3>
      </Link>
      <button onClick={addFav}>{isFav ? "🌟" : "⭐"}</button>
    </div>
    </div>
  );
};

export default Card;
