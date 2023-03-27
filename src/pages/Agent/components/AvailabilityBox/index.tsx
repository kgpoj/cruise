import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { HourglassFilled, SettingFilled } from '@ant-design/icons';
import { Availability } from '../../../../interface/Agent';

interface Props {
  type: Availability;
  number: number;
}

interface CardSettings {
  icon: React.ReactNode,
  title: 'Building' | 'Idle'
}

interface StyledCardProps {
  cardType: Availability
}

const StyledCard = styled(Card)<StyledCardProps>`
  width: 250px;
  height: 100px;
  background-color: ${(props) => (props.cardType === 'building' ? '#f4bb41' : '#8cb94f')};
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

const BuildingIcon = styled(SettingFilled)`
  font-size: 100px;
  color: #f6c44e;
`;

const IdleIcon = styled(HourglassFilled)`
  font-size: 100px;
  color: #9fc468;
`;

const getCardSettings = (type: Availability): CardSettings => {
  if (type === 'building') {
    return {
      title: 'Building',
      icon: <BuildingIcon />,
    };
  }
  return {
    title: 'Idle',
    icon: <IdleIcon />,
  };
};

const AvailabilityBox: React.FC<Props> = ({ type, number }) => {
  const cardSettings = getCardSettings(type);
  return (
    <StyledCard cardType={type}>
      <TitleWrapper>{cardSettings.title}</TitleWrapper>
      {cardSettings.icon}
      <NumberWrapper>{number}</NumberWrapper>
    </StyledCard>
  );
};

export default AvailabilityBox;
