import { createContext } from 'react';

const DeviceContext = createContext(window.innerWidth < 992 ? 'mobile' : 'desktop');
export default DeviceContext;
