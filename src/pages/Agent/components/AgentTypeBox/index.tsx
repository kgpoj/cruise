import React from 'react';
import styled from 'styled-components';

interface AgentTypeBoxProps {
  physicalCount: number,
  virtualCount: number
}

const StyledCard = styled.div`
  width: 250px;
  height: 100px;
  padding: 15px 20px 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: column;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    flex-direction: row;
  }
`;

const Title = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: gray;
`;

const Count = styled.div`
  font-size: 22px;
  font-weight: 500;
`;

const AgentTypeBox = ({ physicalCount, virtualCount }: AgentTypeBoxProps): JSX.Element => (
  <StyledCard>
    <CardItem>
      <Title>ALL</Title>
      <Count>{physicalCount + virtualCount}</Count>
    </CardItem>
    <CardItem>
      <Title>PHYSICAL</Title>
      <Count>{physicalCount}</Count>
    </CardItem>
    <CardItem>
      <Title>VIRTUAL</Title>
      <Count>{virtualCount}</Count>
    </CardItem>
  </StyledCard>
);

export default AgentTypeBox;
