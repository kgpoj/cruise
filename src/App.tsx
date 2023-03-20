import React from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import CruiseSider from './components/CruiseSider';
import Dashboard from './pages/Dashboard';
import Agent from './pages/Agent';
import MyCruise from './pages/MyCruise';
import Help from './pages/Help';
import logo from './assets/logo.png';

const {
  Header,
  Content,
} = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  padding: 0 150px;
  background-color: #fff;
  height: 58px;
  box-shadow: inset 0 15px 15px -15px rgb(0 0 0 / 50%), rgb(0 0 0 / 20%) 0px 2px 5px;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMain = styled(Layout)`
  margin: 0 150px;
`;

const App: React.FC = () => (
  <Router>
    <StyledLayout>
      <StyledHeader>
        <img alt="logo" src={logo} />
      </StyledHeader>
      <StyledMain>
        <CruiseSider />
        <Content>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/agent" element={<Agent />} />
            <Route path="/my-cruise" element={<MyCruise />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Content>
      </StyledMain>
    </StyledLayout>
  </Router>
);

export default App;
