import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CruiseContextProvider from './store/CruiseContextProvider';
import CruiseHeader from './components/common/cruise-header';
import CruiseMain from './components/common/cruise-main';

const App: React.FC = () => (
  <Router>
    <CruiseContextProvider>
      <CruiseHeader />
      <CruiseMain />
    </CruiseContextProvider>
  </Router>
);

export default App;
