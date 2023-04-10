import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import Dashboard from '../../../pages/dashboard';
import MyCruise from '../../../pages/my-cruise';
import Help from '../../../pages/help';
import CruiseMenu from './cruise-menu';
import AgentPage from '../../../pages/agent';

const {
  Content,
} = Layout;

const StyledMain = styled(Layout)`
  overflow: auto;
  height: ${({ theme }) => `calc(100vh - ${theme.heights.header})`};
  padding: 0;
`;

const MainContainer = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledContent = styled(Content)`
  padding-top: 20px;
  padding-left: 40px;
  margin-left: ${({ theme }) => theme.widths.sider};
  
  ${({ theme }) => theme.mediaQueries.isTablet} {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 0;
  }

  ${({ theme }) => theme.mediaQueries.isMobile} {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 0;
  }
`;

const CruiseMain = (): JSX.Element => (
  <StyledMain>
    <MainContainer>
      <CruiseMenu />
      <StyledContent>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agent" element={<AgentPage />} />
          <Route path="/my-cruise" element={<MyCruise />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </StyledContent>
    </MainContainer>
  </StyledMain>
);
export default CruiseMain;
