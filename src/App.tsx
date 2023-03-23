import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CruiseContextProvider from './store/CruiseContextProvider';
import CruiseHeader from './components/CruiseHeader';
import CruiseMain from './components/CruiseMain';

const App: React.FC = () => (
  <Router>
    <CruiseContextProvider>
      <CruiseHeader />
      <CruiseMain />
    </CruiseContextProvider>
  </Router>
);

export default App;
