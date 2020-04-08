import React, {useState} from 'react';
import calculateCost from './utils/calculateCost'
import logo from './logo.svg';
import './App.css';

function App() {
  const [numberOfCorn, setNumberOfCorn] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        🌽 Corn Trip Calculator
      </header>
      <section className="App-section">
        <label>Number of corn
          <input onChange={(event) => {
            setNumberOfCorn(event.currentTarget.value)
          }} value={numberOfCorn} />
        </label>
        Cost of trip with {numberOfCorn} corn: <span>{calculateCost(numberOfCorn)}p</span>
      </section>
    </div>
  );
}

export default App;
