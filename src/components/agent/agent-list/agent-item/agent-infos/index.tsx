import React from 'react';
import { DesktopOutlined, FolderOutlined, InfoCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Tag } from 'antd';
import { Availability } from '../../../../../interface/Agent';

interface AgentInfosProps {
  ipAddress: string,
  name: string,
  availability: Availability
}

interface StyledTagProps {
  type: Availability,
}

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

const AgentInfos: React.FC<AgentInfosProps> = ({ ipAddress, name, availability }) => (
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
);

export default AgentInfos;
