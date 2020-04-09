import React, { useState } from "react";
import Form from "./components/Form";
import calculateCost from "./utils/calculateCost";
import displayCost from "./utils/displayCost";
import logo from "./logo.svg";
import "./App.css";
import tripValidator from "./utils/tripValidator";

function App() {
  const [numberOfCorn, setNumberOfCorn] = useState(0);
  const [numberOfGeese, setNumberOfGeese] = useState(0);

  return (
    <div className="App">
      <header className="App-header">🌽 Corn Trip Calculator</header>
      <section className="App-section">
        <Form
          onSubmit={(newCornNumber, newGeeseNumber) => {
            setNumberOfCorn(newCornNumber);
            setNumberOfGeese(newGeeseNumber);
          }}
        />
        <section className="App-section">
          {tripValidator(numberOfCorn, numberOfGeese) ? (
            <React.Fragment>
              The trip is possible and will cost{" "}
              <span>{displayCost(calculateCost(numberOfCorn))}</span>
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
