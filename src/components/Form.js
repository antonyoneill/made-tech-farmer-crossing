import React, { useState } from "react";
import './Form.css';

export default function Form({onSubmit}) {
  const [numberOfCorn, setNumberOfCorn] = useState(0);

  return (
    <form action="#" onSubmit={(event) => {
        event.preventDefault();
        
        onSubmit(parseInt(numberOfCorn,10))
    }}>
        <div>
      <label>
        Number of bags of corn
        <input
          type="number"
          min="0"
          required={true}
          onChange={(event) => {
              setNumberOfCorn(event.currentTarget.value)
          }}
          value={numberOfCorn}
        />
      </label>
      </div>
      <div>
      <button type="submit">Calculate</button>
      </div>
    </form>
  );
}
