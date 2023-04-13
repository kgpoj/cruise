import React, { useState } from 'react';
import { DeleteOutlined, StopOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Popover } from 'antd';
import { Availability, Resource } from '../../../../../interface/Agent';

export interface AgentActionsProps {
  resources: Resource[],
  availability: Availability,
  onResourceDelete: (resourceId: string) => void
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

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;
  width: fit-content;
  height: fit-content;
  font-weight: bold;
`;

const DenyButton = styled(StyledButton)`
  align-self: flex-end;
`;

const CancelButton = styled(StyledButton)`
  background-color: #485362;
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
}) => {
  const [open, setOpen] = useState(false);

  const handleCancelClick = (): void => {
    setOpen(false);
  };

  const handleOpenChange = (newOpen: boolean): void => {
    setOpen(newOpen);
  };

  const content = (
    <div>
      <p>Separate multiple resource name with commas</p>
      <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
    </div>
  );
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
        <Popover
          placement="bottomLeft"
          content={content}
          trigger="click"
          open={open}
          onOpenChange={handleOpenChange}
        >
          <StyledButton>+</StyledButton>
        </Popover>
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
