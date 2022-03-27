import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Skeleton-2.0.4 2/css/skeleton.css';
import './components/Skeleton-2.0.4 2/css/normalize.css';
import Header from './components/Header'
import InfoContainer from './components/InfoContainer'
import MotorcycleContainer from './components/MotorcycleContainer'

const display = 5;


function App() {
const API = "http://localhost:3000/motor";

const [ motor, setMotor ] = useState ([]);
const [startBikes, setStartBikes] = useState([]);


useEffect(() => {
  fetch(API)
  .then(res => res.json())
  .then(data => {
    setMotor(data);
  });
}, []);

function nextBikes() {
  setStartBikes(startBikes + display)
}


  return (
    <div className="container">
    <Header />
    <InfoContainer />
    <MotorcycleContainer motor={motor.slice(startBikes, startBikes + display)} nextBikes={nextBikes} />
    </div>
  );
};

export default App;