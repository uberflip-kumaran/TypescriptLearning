import React from 'react';
import { render, screen } from '@testing-library/react';

import Tours from './Tours';
import { mockTours } from '../__mock__/sampleTours';

test('it renders the title', () => {
  // render the component
  render(<Tours tours={mockTours} removeTour={jest.fn()} />);
  
  // find the expected elements

  // assertion

});

test('it renders correct number of tours', () => {
  // render the component

  // find the expected elements
  /* in this time, the expected element is not <Tour>
   * since we want to test behavior instead of implementation details
   * like user won't even know that there is an <Tour> component
   * So this time we can check the number of images and Read More button
   * to ensure that all tours are rendered.
  */ 

  // assertion
});
