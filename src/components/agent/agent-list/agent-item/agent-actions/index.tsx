import React from 'react';
import { DeleteOutlined, StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Availability, Resource } from '../../../../../interface/Agent';

interface AgentActionsProps {
  resources: Resource[],
  availability: Availability,
}

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;
`;

const ResourcesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  column-gap: 10px;
`;

const ResourceItem = styled.div`
  background-color: #f5f5f5;
  padding: 0 3px;
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

const AgentActions: React.FC<AgentActionsProps> = ({ resources, availability }) => (
  <Actions>
    <ResourcesWrapper>
      <StyledButton>+</StyledButton>
      {resources.map((resource) => (
        <ResourceItem key={resource.id}>
          {resource.name}
          <DeleteOutlined />
        </ResourceItem>
      ))}
    </ResourcesWrapper>
    {availability === 'building' && (
      <StyledButton>
        <StopOutlined />
        Deny
      </StyledButton>
    )}
  </Actions>
);

export default AgentActions;
