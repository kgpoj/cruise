import React from 'react';
import styled from 'styled-components';
import { Avatar, List, Tag } from 'antd';
import {
  DeleteOutlined,
  DesktopOutlined,
  FolderOutlined,
  InfoCircleOutlined, StopOutlined,
} from '@ant-design/icons';
import { Availability, Resource } from '../../../../interface/Agent';

interface AgentItemProps {
  iconUrl: string,
  name: string,
  availability: Availability,
  ipAddress: string,
  resources: Resource[],
}

interface StyledTagProps {
  type: Availability,
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

const Infos = styled.div`
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 5px;
`;

const StyledTag = styled(Tag)<StyledTagProps>`
  background-color: ${({ type, theme }) => theme.colors[type]};
  color: white;
`;

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
      <Infos>
        <InfoItem>
          <DesktopOutlined />
          {name}
        </InfoItem>
        <StyledTag type={availability}>{availability}</StyledTag>
        <InfoItem>
          <InfoCircleOutlined />
          {ipAddress}
        </InfoItem>
        <InfoItem>
          <FolderOutlined />
          /var/lib/cruise-agent
        </InfoItem>
      </Infos>
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
    </Content>
  </StyledListItem>
);

export default AgentItem;
