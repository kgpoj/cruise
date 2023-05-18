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
  row-gap: 5px;
  
  ${({ theme }) => theme.mediaQueries.isMobile} {
    flex-direction: column;
  }
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

const StyledTag = styled(Tag)<StyledTagProps>`
  background-color: ${({ type, theme }) => (type === Availability.Idle ? theme.colors.idle : theme.colors.building)};
  color: white;
  font-size: inherit;

  ${({ theme }) => theme.mediaQueries.isMobile} {
    width: 5px;
    height: 100%;
    padding: 0;
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
  }
`;

const AgentInfos: React.FC<AgentInfosProps> = ({ ipAddress, name, availability }) => (
  <Infos>
    <InfoItem>
      <DesktopOutlined />
      <Name>{name}</Name>
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
