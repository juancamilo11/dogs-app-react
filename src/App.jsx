import React, { useEffect, useState } from 'react'
import { BreedSelect } from './components/BreedSelect'
import { Card } from './components/Card'
import fetchRandomDog from './helpers/fetchRandomDog'

function App() {

  const [dog, setDog] = useState({});

  const updateDog = (breadId) => {
    fetchRandomDog(breadId)
    .then(newDog => {
      setDog(newDog);
    })
  }

  useEffect(() => {
    updateDog();
  }, [])

  return (
    <div className="app">
      <BreedSelect updateDog={updateDog}/>
      <Card dog={dog} updateDog={updateDog}/>
    </div>
  );
}

export default App;
