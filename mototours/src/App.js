import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header'
import InfoContainer from './components/InfoContainer'
import MotorcycleContainer from './components/MotorcycleContainer'


function App() {
const API = "http://localhost:3000/motor";

const [ motor, setMotor ] = useState ([]);


useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    setMotor(data);
  });
}, []);



  return (
    <div className="App">
    <Header />
    <InfoContainer />
    <MotorcycleContainer motor={motor} />
    </div>
  );
};

export default App;