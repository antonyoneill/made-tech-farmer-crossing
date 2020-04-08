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
        <section>
        <label>Number of corn
          <input
            type="number"
            onChange={(event) => {
              const newCountOfCorn = parseInt(event.currentTarget.value,10)
              if (!isNaN(newCountOfCorn)) {
                setNumberOfCorn(newCountOfCorn)
              }
            }} 
            value={numberOfCorn}
          />
        </label>
        </section>
        <section className="App-section">
        Cost of trip with {numberOfCorn} corn: <span>{calculateCost(numberOfCorn)}p</span>
        </section>
      </section>
    </div>
  );
}

export default App;
