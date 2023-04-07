import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import logo from '../../../assets/logo.png';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #fff;
  height: ${({ theme }) => theme.heights.header};
  box-shadow: inset 0 15px 15px -15px rgb(0 0 0 / 50%), rgb(0 0 0 / 20%) 0px 2px 5px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CruiseHeader = (): JSX.Element => (
  <StyledHeader>
    <img alt="logo" src={logo} width={80} height={27} />
  </StyledHeader>
);
export default CruiseHeader;
