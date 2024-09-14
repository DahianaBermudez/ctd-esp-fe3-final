import React, { useEffect } from 'react'
import Card from '../Components/Card'
import { useCharStates } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useCharStates();

  return (
      <div className='card-grid'>
      {state.data.map((char) => (
        <Card key={char.id} char={char} />
      ))}
      </div>
  );
}

export default Home