import React from 'react';
import styled from 'styled-components';
import { Avatar, List } from 'antd';
import { Availability, Resource } from '../../../../interface/Agent';
import AgentInfos from './agent-infos';
import AgentActions from './agent-actions';

interface AgentItemProps {
  iconUrl: string,
  name: string,
  availability: Availability,
  ipAddress: string,
  resources: Resource[],
}

const StyledListItem = styled(List.Item)`
  background-color: white;
  margin-top: 10px;
  justify-content: space-around;
  column-gap: 20px;
  padding: 10px !important;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 20px;
`;

const AgentItem: React.FC<AgentItemProps> = ({
  iconUrl,
  name,
  availability,
  ipAddress,
  resources,
}) => (
  <StyledListItem>
    <Avatar src={iconUrl} size="large" />
    <Content>
      <AgentInfos ipAddress={ipAddress} name={name} availability={availability} />
      <AgentActions resources={resources} availability={availability} />
    </Content>
  </StyledListItem>
);

export default AgentItem;
