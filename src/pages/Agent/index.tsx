import React from 'react';
import styled from 'styled-components';
import AvailabilityBox from './components/AvailabilityBox';
import AgentTypeBox from './components/AgentTypeBox';

const StatusBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px 10px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Agent = (): JSX.Element => (
  <StatusBoxWrapper>
    <AvailabilityBox type="building" number={4} />
    <AvailabilityBox type="idle" number={4} />
    <AgentTypeBox physicalCount={4} virtualCount={5} />
  </StatusBoxWrapper>
);

export default Agent;
