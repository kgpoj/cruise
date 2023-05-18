import React from 'react';
import { screen } from '@testing-library/react';
import AvailabilityBox from './index';
import renderWithGlobalWrapper from '../../../utils/testUtils';
import { Availability } from '../../../__generated__/graphql';

describe('AvailabilityBox', () => {
  it('renders correctly', () => {
    renderWithGlobalWrapper(<AvailabilityBox type={Availability.Building} number={4} />);
    expect(screen.getByText(/building/i)).toBeInTheDocument();
    expect(screen.getByText(/4/i)).toBeInTheDocument();
  });
});
