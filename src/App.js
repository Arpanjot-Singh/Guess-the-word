import { useState, useEffect } from 'react';
import Wordle from './components/Wordle';

import './index.css';

function App() {
  const [solution,setSolution]=useState(null);

  useEffect(()=>{
    fetch('https://planet-ultra-swim.glitch.me/solutions')
    .then(res=>res.json())
    .then(json=>{
      const randomSolution=json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  },[setSolution])

  return (
    <div className="App">
      <h1>Guess The Word</h1>
      {solution && <Wordle solution={solution}/>}
    </div>
  );
}

export default App;
