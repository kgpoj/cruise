import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { HourglassFilled, SettingFilled } from '@ant-design/icons';
import { Availability } from '../../../../interface/Agent';
import {
  BUILDING_COLOR, BUILDING_ICON_COLOR,
  IDLE_COLOR, IDLE_ICON_COLOR,
  LARGE_FONT_SIZE, NORMAL_CARD_HEIGHT,
  NORMAL_FONT_SIZE, SMALL_CARD_HEIGHT,
} from '../../../../constants/styles';

interface Props {
  type: Availability;
  number: number;
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
  
  @media (max-width: 768px) {
    height: ${SMALL_CARD_HEIGHT};
  }
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
  
  @media (max-width: 768px) {
    font-size: ${SMALL_CARD_HEIGHT};
  }
`;

const IdleIcon = styled(HourglassFilled)`
  font-size: ${NORMAL_CARD_HEIGHT};
  color: ${IDLE_ICON_COLOR};
  
  @media (max-width: 768px) {
    font-size: ${SMALL_CARD_HEIGHT};
  }
`;
const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

const AvailabilityBox: React.FC<Props> = ({ type, number }) => (
  <StyledCard cardType={type}>
    <TitleWrapper>{capitalizeFirstLetter(type)}</TitleWrapper>
    {type === 'building' ? <BuildingIcon /> : <IdleIcon />}
    <NumberWrapper>{number}</NumberWrapper>
  </StyledCard>
);

export default AvailabilityBox;
