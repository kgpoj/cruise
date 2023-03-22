import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';
import CruiseSider from '../CruiseSider';
import Dashboard from '../../pages/Dashboard';
import Agent from '../../pages/Agent';
import MyCruise from '../../pages/MyCruise';
import Help from '../../pages/Help';
import DeviceContext from '../../store/DeviceContext';

const {
  Content,
} = Layout;

const StyledMain = styled(Layout)`
  margin: 0 150px;
  @media (max-width: 992px) {
    margin: 0;
  }
`;
const CruiseMain = () => {
  const deviceType = useContext(DeviceContext);

  return (
    <StyledMain>
      {deviceType === 'desktop' && <CruiseSider />}
      <Content>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agent" element={<Agent />} />
          <Route path="/my-cruise" element={<MyCruise />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Content>
    </StyledMain>
  );
};

export default CruiseMain;
