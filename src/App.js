// App.js
import React from 'react';
import './App.css';
import { HeaderImage, HeaderLine } from './components/headers';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="main-container">
      <MatrixBackground />
      <div className="header">
        <HeaderImage />
      </div>
      <HeaderLine />
    </div>
  );
}

export default App;
