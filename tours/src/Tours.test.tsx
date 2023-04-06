import React from 'react';
import { render, screen } from '@testing-library/react';

import Tours from './Tours';
import { mockTours } from '../__mock__/sampleTours';

test('it renders the title', () => {
  // render the component
  render(<Tours tours={mockTours} removeTour={jest.fn()} />);
  
  // find the expected elements
  const header = screen.getByText('our tours');

  // assertion
  expect(header).toBeInTheDocument();

});
