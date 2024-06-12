import React, { useState } from 'react';
import WebApp from '@twa-dev/sdk';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const showAlert = () => {
    WebApp.showAlert(`Hello World! Current count is ${count}`);
  };

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <a href="https://barkprotocol.com" target="_blank" rel="noopener noreferrer">
            <img src="/logo.png" className="logo" alt="BARK logo - Decentralized Payments Protocol" />
          </a>
        </div>
        <h1 className="app-title">BARK | Payments</h1>
      </header>
      <main>
        <p className="app-description">
          Welcome to the BARK Payments app! This app allows you to explore the capabilities of the BARK Protocol
          for decentralized payments. You can increment the count, show an alert, and more.
        </p>
        <div className="card">
          <p>Current count: {count}</p>
          <button className="button" onClick={incrementCount}>Increment Count</button>
        </div>
        <div className="card">
          <button className="button alert-button" onClick={showAlert}>Show Alert</button>
        </div>
      </main>
    </div>
  );
}

export default App;
