import React from 'react';
import { DeleteOutlined, StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Availability, Resource } from '../../../../../interface/Agent';
import { StyledButton } from '../../../styles';
import AddResourcePopover from './add-resource-popover';

export interface AgentActionsProps {
  resources: Resource[],
  availability: Availability,
  onResourceDelete: (resourceId: string) => void
  onResourcesAdd: (resourceIds: string[]) => void
}

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  row-gap: 10px;

  ${({ theme }) => theme.mediaQueries.isMobile} {
    flex-direction: column;
  }
`;

const DenyButton = styled(StyledButton)`
  align-self: flex-end;
`;

const ResourcesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  column-gap: 10px;
`;

const ResourceItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
`;

const ResourceItem = styled.div`
  background-color: #f5f5f5;
  padding: 0 3px;
  display: flex;
  column-gap: 5px;
  align-items: center;
`;

const StyledTrashIcon = styled(DeleteOutlined)`
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: red;
  }
`;

const AgentActions: React.FC<AgentActionsProps> = ({
  resources,
  availability,
  onResourceDelete,
  onResourcesAdd,
}) => {
  const getResourceItem = (resource: Resource): JSX.Element => {
    const handleTrashClick = (): void => onResourceDelete(resource.id);

    return (
      <ResourceItem key={resource.id}>
        {resource.name}
        <StyledTrashIcon data-testid="trash-icon" onClick={handleTrashClick} />
      </ResourceItem>
    );
  };

  return (
    <Actions>
      <ResourcesWrapper>
        <AddResourcePopover onConfirm={onResourcesAdd}>
          <StyledButton>+</StyledButton>
        </AddResourcePopover>
        <ResourceItemsWrapper>
          {resources.map((resource) => getResourceItem(resource))}
        </ResourceItemsWrapper>
      </ResourcesWrapper>
      {availability === 'building' && (
        <DenyButton>
          <StopOutlined />
          Deny
        </DenyButton>
      )}
    </Actions>
  );
};

export default AgentActions;
