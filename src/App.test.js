import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test.each([[0,"£0.00"],[1,"£0.25"],[10,"£4.75"]])('the user can input the number corn and be told the cost of transport', (numberOfCorn, expectedCost) => {
  const context = render(<App />);

  const input = context.getByLabelText("Number of corn")

  fireEvent.change(input, {target:{value: numberOfCorn}})

  const cost = context.getByText(expectedCost)
  expect(cost).toBeInTheDocument();
})
test('the user does not see NaN when the input is blank', () => {
  const context = render(<App />);

  const input = context.getByLabelText("Number of corn")

  fireEvent.change(input, {target:{value: ""}})

  const cost = context.queryByText(/NaN/)
  expect(cost).not.toBeInTheDocument();
})