import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('it shows the cost for one corn', () => {
  const context = render(<App />);
  const cost = context.getByText('25p');
  expect(cost).toBeInTheDocument();
});
