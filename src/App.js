// App.js
import React from 'react';
import './App.css';
import { HeaderImage, HeaderLine } from './components/headers';

function App() {
  return (
    <div className="main-container">
      <div className="header">
        <HeaderImage />
      </div>
      <HeaderLine />
    </div>
  );
}

export default App;
