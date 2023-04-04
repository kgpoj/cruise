import React, { useState } from 'react';
import styled from 'styled-components';
import { RadioChangeEvent } from 'antd';
import AgentTypeBox from './agent-type-box';
import AvailabilityBox from './availability-box';
import AgentTypeFilter from './agent-type-filter';
import { TypeFilter } from '../../interface/Agent';
import mockAgentsData from '../../mock/mockAgentsData';
import AgentList from './agent-list';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatusBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 15px 10px;

  ${({ theme }) => theme.mediaQueries.isMobile} {
    flex-wrap: wrap;
  }
`;

const Agent = (): JSX.Element => {
  const [agentType, setAgentType] = useState<TypeFilter>('all');

  const filteredData = mockAgentsData.filter((agent) => {
    if (agentType === 'all') {
      return true;
    }
    return agent.agentType === agentType;
  });
  const handleRadioChange = (e: RadioChangeEvent): void => {
    setAgentType(e.target.value as TypeFilter);
  };

  return (
    <PageWrapper>
      <StatusBoxWrapper>
        <AvailabilityBox type="building" number={4} />
        <AvailabilityBox type="idle" number={4} />
        <AgentTypeBox physicalCount={4} virtualCount={5} />
      </StatusBoxWrapper>
      <AgentTypeFilter onChange={handleRadioChange} />
      <AgentList dataSource={filteredData} />
    </PageWrapper>
  );
};

export default Agent;
