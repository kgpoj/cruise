import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import Dashboard from '../../pages/Dashboard';
import Agent from '../../pages/Agent';
import MyCruise from '../../pages/MyCruise';
import Help from '../../pages/Help';
import CruiseMenu from '../CruiseMenu';

const {
  Content,
} = Layout;

const StyledMain = styled(Layout)`
  margin: 0 150px;
  @media (max-width: 992px) {
    margin: 0;
  }
`;

const StyledContent = styled(Content)`
  padding-top: 20px;
  padding-left: 40px;
`;

const CruiseMain = (): JSX.Element => (
  <StyledMain>
    <CruiseMenu />
    <StyledContent>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/agent" element={<Agent />} />
        <Route path="/my-cruise" element={<MyCruise />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </StyledContent>
  </StyledMain>
);
export default CruiseMain;
