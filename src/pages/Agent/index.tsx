import React from 'react';
import AvailabilityBox from './components/AvailabilityBox';

const Agent = () => (
  <div>
    <AvailabilityBox type="building" number={4}/>
    <AvailabilityBox type="idle" number={4}/>
  </div>
);

export default Agent;
