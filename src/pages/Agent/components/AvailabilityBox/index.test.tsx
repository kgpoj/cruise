import React from 'react';
import { screen } from '@testing-library/react';
import AvailabilityBox from './index';
import renderWithGlobalWrapper from '../../../../utils/testUtils';

describe('AvailabilityBox', () => {
  it('renders correctly', () => {
    renderWithGlobalWrapper(<AvailabilityBox type="building" number={4} />);
    expect(screen.getByText(/building/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});
