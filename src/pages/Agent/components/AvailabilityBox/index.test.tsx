import React from 'react';
import { render, screen } from '@testing-library/react';
import AvailabilityBox from './index';

describe('AvailabilityBox', () => {
  it('renders correctly', () => {
    render(<AvailabilityBox type="building" number={4} />);
    expect(screen.getByText(/building/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});
