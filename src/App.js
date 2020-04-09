import React, { useState } from "react";
import Form from "./components/Form";
import calculateTripCount from "./utils/calculateTripCount";
import calculateCost from "./utils/calculateCost";
import displayCost from "./utils/displayCost";
import logo from "./logo.svg";
import "./App.css";
import tripValidator from "./utils/tripValidator";

function App() {
  const [numberOfCorn, setNumberOfCorn] = useState(0);
  const [numberOfGeese, setNumberOfGeese] = useState(0);
  const [numberOfFoxes, setNumberOfFoxes] = useState(0);

  const tripCount = calculateTripCount(numberOfCorn, numberOfGeese, numberOfFoxes);

  return (
    <div className="App">
      <header className="App-header">🌽 Corn Trip Calculator</header>
      <section className="App-section">
        <Form
          onSubmit={(newCornNumber, newGeeseNumber, newFoxesNumber) => {
            setNumberOfCorn(newCornNumber);
            setNumberOfGeese(newGeeseNumber);
            setNumberOfFoxes(newFoxesNumber);
          }}
        />
        <section className="App-section">
          {tripValidator(numberOfCorn, numberOfGeese, numberOfFoxes) ? (
            <React.Fragment>
              <p>The trip is possible.</p>
              <p>
                You require {tripCount} trips and these will cost{" "}
                <span>{displayCost(calculateCost(tripCount))}</span>
              </p>
            </React.Fragment>
          ) : (
            <React.Fragment>The trip is not possible</React.Fragment>
          )}
        </section>
      </section>
    </div>
  );
}

export default App;
