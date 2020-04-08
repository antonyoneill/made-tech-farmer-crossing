import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test.each([[0,0],[1,25],[10,19 * 25]])('the user can input the number corn and be told the cost of transport', (numberOfCorn, expectedCost) => {
  const context = render(<App />);

  const input = context.getByLabelText("Number of corn")

  fireEvent.change(input, {value: numberOfCorn})

  const cost = context.getByText(`${expectedCost}p`)
  expect(cost).toBeInTheDocument();
})