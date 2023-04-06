import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import Tour from './Tour';
import { mockTours } from '../__mock__/sampleTours';

const mockTour = mockTours[0];

test('it renders two h4, two buttons and one img ', () => {
  // render the component
  render(<Tour key={mockTour.id} {...mockTour} removeTour={jest.fn()} />);
  
  // find the expected elements
  const h4s = screen.getAllByRole('heading', {level: 4});
  const buttons = screen.getAllByRole('button');
  const img = screen.getByRole('img');

  // assertion
  expect(h4s).toHaveLength(2);
  expect(buttons).toHaveLength(2);
  expect(img).toBeInTheDocument();
});


test('it collapse/uncollapse when show more button is clicked', async () => {
  // render the component
  render(<Tour key={mockTour.id} {...mockTour} removeTour={jest.fn()} />);
  
  // find the expected elements
  const span = await screen.findByTestId('info');
  const readMoreButton = screen.getAllByRole('button')[0];

  // expect the inital length to be 203, since there are 3 dots
  expect(span.textContent?.length).toBe(203);

  // user clicked read more button
  await user.click(readMoreButton);

  // expect the length to be greater than 203
  expect(span.textContent?.length).toBeGreaterThan(203);

  // user clicked show less button
  await user.click(readMoreButton);

  // expect the length to be 203 again
  expect(span.textContent?.length).toBe(203);
});