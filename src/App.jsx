import React, { useState } from 'react'
import { BreedSelect } from './components/BreedSelect'
import { Card } from './components/Card'

const initialDog = {
  id: 1,
  image: 'https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg',
  name: 'Affenpinscher'
}

function App() {

  const [dog, setDog] = useState(initialDog);

  return (
    <div className="app">
      <BreedSelect />
      <Card dog={dog}/>
    </div>
  );
}

export default App;
