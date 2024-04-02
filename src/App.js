import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  let [animals, setAnimals] = useState([]);
  
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
    
  };

 

  const renderedAnimals = animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />
  })
  return (
    <div className="app">
      <h1>I Love Animals</h1>
      <button onClick={handleClick}>Add Animal & Click the Heart</button>
      <p className='animal-list'>{renderedAnimals}</p>
    </div>
  );
}

export default App;
