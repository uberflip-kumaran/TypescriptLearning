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

  // assertion

});


test('it collapse/uncollapse when show more button is clicked', async () => {
  // render the component
  
  // find the expected elements

  // expect the inital length to be 203, since there are 3 dots

  // user clicked read more button

  // expect the length to be greater than 203

  // user clicked show less button

  // expect the length to be 203 again
});