import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Skeleton-2.0.4 2/css/skeleton.css';
import './components/Skeleton-2.0.4 2/css/normalize.css';
import Header from './components/Header'
import InfoContainer from './components/InfoContainer'
import MotorcycleContainer from './components/MotorcycleContainer'

const display = 6;


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

function selectBikes(id){
  setMotor(motor.map(moto => id=== moto.id ? {...moto, selected:true} : moto))
}
function recommendedRoute(id) {
  setMotor(motor.map(moto => id === moto.id ? {...moto, selectedForTrip:true} : moto))
}
  return (
    <div>
      <Header />
      <InfoContainer motor={motor.filter(moto=>moto.selected)} recommendedRoute={recommendedRoute} motoTrip={motor.filter(moto=>moto.selectedForTrip)}/>
      <MotorcycleContainer motor={motor.slice(startBikes, startBikes + display)} nextBikes={nextBikes} handleClick={selectBikes} />
    </div>
  );
};

export default App;