import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { HourglassFilled, SettingFilled } from '@ant-design/icons';
import { Availability } from '../../../../interface/Agent';
import {
  BUILDING_COLOR, BUILDING_ICON_COLOR,
  IDLE_COLOR, IDLE_ICON_COLOR,
  LARGE_FONT_SIZE, NORMAL_CARD_HEIGHT,
  NORMAL_FONT_SIZE,
} from '../../../../constants/styles';

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
  height: ${NORMAL_CARD_HEIGHT};
  background-color: ${(props) => (props.cardType === 'building' ? BUILDING_COLOR : IDLE_COLOR)};
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
  font-size: ${NORMAL_FONT_SIZE};
  font-weight: bold;
`;

const NumberWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: white;
  font-size: ${LARGE_FONT_SIZE};
`;

const BuildingIcon = styled(SettingFilled)`
  font-size: ${NORMAL_CARD_HEIGHT};
  color: ${BUILDING_ICON_COLOR};
`;

const IdleIcon = styled(HourglassFilled)`
  font-size: ${NORMAL_CARD_HEIGHT};
  color: ${IDLE_ICON_COLOR};
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
