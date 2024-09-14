import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from "./utils/global.context";


const Navbar = () => {
  
const { state, dispatch } = useCharStates();

  const changeTheme = () => {
    dispatch({ type: "TOGGLE_THEME", payload: {} });
    if(state.isDark){
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  } 
  return (
    <nav>
      <Link to="/"><h4>Home</h4></Link>
      <Link to="/contact"><h4>Contact</h4></Link>
      <Link to="/dentist"><h4>Details</h4></Link>
      <Link to="/favs"><h4>favs</h4></Link>

      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar