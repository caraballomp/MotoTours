import React from 'react';
import './App.css';
import Header from './components/Header'
import InfoContainer from './components/InfoContainer'
import MotorcycleContainer from './components/MotorcycleContainer'

function App() {
  return (
    <div className="App">
    <Header />
    <InfoContainer />
    <MotorcycleContainer />
    </div>
  );
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>