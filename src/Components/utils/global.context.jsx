import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
  data: [],
  favs: lsFavs,
  isDark: false,
};

const ContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_DATA", payload: res.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;

export const useCharStates = () => useContext(ContextGlobal);
