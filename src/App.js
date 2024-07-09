import React from 'react';
import './App.css';
import { HeaderImage, HeaderLine } from './components/headers';
import MatrixBackground from './components/MatrixBackground';
import Tabs from './components/body';

function App() {
  return (
    <div className="main-container">
      <MatrixBackground />
      <div className="header">
        <HeaderImage />
      </div>
      <HeaderLine />
      <Tabs />
    </div>
  );
}

export default App;
