import { render, screen } from '@testing-library/react';

import App from './App';
import { mockTours } from '../__mock__/sampleTours';

test('it renders correct number of tours', async () => {
  // render the component
  render(<App />);
  const expectLength = mockTours.length;

  // find the target elements, here we use find instead of 
  // get since these elements renders based on API call which is async
  const imgs = await screen.findAllByRole('img');
  const readMoreButtons = await screen.findAllByText('read more')

  // assertion
  expect(imgs.length).toBe(expectLength);
  expect(readMoreButtons.length).toBe(expectLength);
});
