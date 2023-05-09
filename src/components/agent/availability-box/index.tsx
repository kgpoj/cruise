import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';
import { HourglassFilled, SettingFilled } from '@ant-design/icons';
import { Availability } from '../../../interface/Agent';

interface Props {
  type: Availability;
  number: number;
}
interface StyledCardProps {
  cardtype: Availability
}

const BUILDING_ICON_COLOR = '#f6c44e';
const IDLE_ICON_COLOR = '#9cc65b';

const StyledCard = styled(Card)<StyledCardProps>`
  flex: 1;
  height: ${({ theme }) => theme.heights.normalCard};
  background-color: ${(props) => (props.cardtype === Availability.Building
    ? props.theme.colors.building
    : props.theme.colors.idle
  )};
  border: none;
  border-radius: 0;
  padding: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${({ theme }) => theme.mediaQueries.isMobile} {
    height: ${({ theme }) => theme.heights.smallCard};
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: transparent;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-weight: bold;
`;

const NumberWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 20px;
  color: white;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const BuildingIcon = styled(SettingFilled)`
  font-size: ${({ theme }) => theme.heights.normalCard};
  color: ${BUILDING_ICON_COLOR};
  
  ${({ theme }) => theme.mediaQueries.isMobile} {
    font-size: ${({ theme }) => theme.heights.smallCard};
  }
`;

const IdleIcon = styled(HourglassFilled)`
  font-size: ${({ theme }) => theme.heights.normalCard};
  color: ${IDLE_ICON_COLOR};
  
  ${({ theme }) => theme.mediaQueries.isMobile} {
    font-size: ${({ theme }) => theme.heights.smallCard};
  }
`;
const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

const AvailabilityBox: React.FC<Props> = ({ type, number }) => (
  <StyledCard cardtype={type}>
    <TitleWrapper>{capitalizeFirstLetter(type)}</TitleWrapper>
    {type === Availability.Building ? <BuildingIcon /> : <IdleIcon />}
    <NumberWrapper>{number}</NumberWrapper>
  </StyledCard>
);

export default AvailabilityBox;
