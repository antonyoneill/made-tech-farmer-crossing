import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test.each([[0,"£0.00"],[1,"£0.25"],[10,"£4.75"]])('the user can input the number corn and be told the cost of transport', async (numberOfCorn, expectedCost) => {
  const context = render(<App />);

  const input = context.getByLabelText("Number of bags of corn")

  fireEvent.change(input, {target:{value: numberOfCorn}})

  const button = context.getByText("Calculate")

  fireEvent.click(button)

  const cost = context.getByText(expectedCost)
  expect(cost).toBeInTheDocument();
})

test('when there 3 bags of corn, and two geese the trip is not possible', () => {
  const context = render(<App />);

  const cornInput = context.getByLabelText("Number of bags of corn")

  fireEvent.change(cornInput, {target:{value: 3}})
  
  const geeseInput = context.getByLabelText("Number of geese")

  fireEvent.change(geeseInput, {target:{value: 2}})

  const button = context.getByText("Calculate")

  fireEvent.click(button)

  const impossibleMessage = context.getByText("The trip is not possible")
  expect(impossibleMessage).toBeInTheDocument();
})