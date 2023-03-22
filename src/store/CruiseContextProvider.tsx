import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';
import DeviceContext from './DeviceContext';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;
const CruiseContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 992) {
        setDeviceType('desktop');
      } else if (width >= 768) {
        setDeviceType('tablet');
      } else {
        setDeviceType('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <StyledLayout>
      <DeviceContext.Provider value={deviceType}>
        {children}
      </DeviceContext.Provider>
    </StyledLayout>
  );
};

export default CruiseContextProvider;