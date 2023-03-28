import React from 'react';
import AvailabilityBox from './components/AvailabilityBox';
import AgentTypeBox from './components/AgentTypeBox';

const Agent = (): JSX.Element => (
  <div>
    <AvailabilityBox type="building" number={4} />
    <AvailabilityBox type="idle" number={4} />
    <AgentTypeBox physicalCount={4} virtualCount={5} />
  </div>
);

export default Agent;
