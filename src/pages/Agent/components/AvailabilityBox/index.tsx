import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { HourglassFilled, SettingFilled } from '@ant-design/icons';
import { Availability } from '../../../../interface/Agent';

interface Props {
  type: Availability;
  number: number;
}

const StyledCard = styled(Card)`
  width: 250px;
  height: 100px;
  background-color: #f4bb41;
  border: none;
  border-radius: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const NumberWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: white;
  font-size: 38px;
`;

const getCardSettings = (type: Availability) => {
  if (type === 'building') {
    return {
      title: 'Building',
      backgroundColor: '#f4bb41',
      icon: <SettingFilled style={{ fontSize: 100, color: '#f6c44e' }} />,
    };
  }
  return {
    title: 'Idle',
    backgroundColor: '#8cb94f',
    icon: <HourglassFilled style={{ fontSize: 100, color: '#9fc468' }} />,
  };
};

const AvailabilityBox: React.FC<Props> = ({ type, number = 3 }) => {
  const cardSettings = getCardSettings(type);
  return (
    <StyledCard style={{ backgroundColor: cardSettings.backgroundColor }}>
      <TitleWrapper>{cardSettings.title}</TitleWrapper>
      {cardSettings.icon}
      <NumberWrapper>{number}</NumberWrapper>
    </StyledCard>
  );
};

export default AvailabilityBox;
