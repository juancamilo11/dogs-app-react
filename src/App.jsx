import React, { useEffect, useState } from 'react'
import { BreedSelect } from './components/BreedSelect'
import { Card } from './components/Card'
import fetchRandomDog from './helpers/fetchRandomDog'
import { Footer } from './components/Footer'

function App() {

  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const updateDog = (breadId) => {
    setLoading(true);
    fetchRandomDog(breadId)
    .then(newDog => {
      setDog(newDog);
      setLoading(false);
    }).catch(err => {
      setError(`${err}`);
    })
  }

  useEffect(() => {
    updateDog();
  }, [])

  return (
    <div className="app">
      <BreedSelect updateDog={updateDog} />
      <Card dog={dog} updateDog={updateDog} loading={loading} error={error}/>
      <Footer />
    </div>
  );
}

export default App;
