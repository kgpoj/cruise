import React from 'react';
import styled from 'styled-components';
import { RadioChangeEvent } from 'antd';
import AgentTypeBox from './components/AgentTypeBox';
import AvailabilityBox from './components/AvailabilityBox';
import AgentTypeFilter from './components/AgentTypeFilter';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const handleRadioChange = (e: RadioChangeEvent): void => {
  console.log(`radio checked:${e.target.value}`);
};

const StatusBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 15px 10px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
const Agent = (): JSX.Element => (
  <PageWrapper>
    <StatusBoxWrapper>
      <AvailabilityBox type="building" number={4} />
      <AvailabilityBox type="idle" number={4} />
      <AgentTypeBox physicalCount={4} virtualCount={5} />
    </StatusBoxWrapper>
    <AgentTypeFilter onChange={handleRadioChange} />
  </PageWrapper>
);

export default Agent;
