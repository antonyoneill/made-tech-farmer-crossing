import React, {useState} from 'react';
import Form from './components/Form'
import calculateCost from './utils/calculateCost'
import displayCost from './utils/displayCost'
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
        <Form onSubmit={(newCornNumber) => {
          setNumberOfCorn(newCornNumber)
        }}/>
        <section className="App-section">
        Cost of trip with {numberOfCorn} bags of corn: <span>{displayCost(calculateCost(numberOfCorn))}</span>
        </section>
      </section>
    </div>
  );
}

export default App;
