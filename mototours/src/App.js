import React, { useState, useEffect } from 'react';
import './App.css';
import './components/Skeleton-2.0.4 2/css/skeleton.css';
import './components/Skeleton-2.0.4 2/css/normalize.css';
import Header from './components/Header'
import InfoContainer from './components/InfoContainer'
import MotorcycleContainer from './components/MotorcycleContainer'


const display = 5;



function App() {
  
  
  const API = "http://localhost:3001/motor";

  const [ motor, setMotor ] = useState ([]);
  const [startBikes, setStartBikes] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false)
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    fetch(API)
    .then(res => res.json())
    .then(data => {
      setMotor(data);
    });
  }, []);


  function handleClick (){
  setDarkMode((darkMode) => !darkMode);
  } 
  
  function nextBikes() {
    setStartBikes((startBikes + display) % motor.length)
  }


  function selectBikes(id){
    setMotor(motor.map(moto => id=== moto.id ? {...moto, selected:true} : moto))

  }
  function resetBikes(id){
    setMotor(motor.map(moto => id=== moto.id ? {...moto, selected:false, selectedForTrip:false} : moto))
  }

  function recommendedRoute(id) {
    setMotor(motor.map(moto => id === moto.id ? {...moto, selectedForTrip:true} : moto))
  }
  function disableClick(){
    setIsDisabled((isDisabled)=>!isDisabled)
  }
  const className = isDisabled ? 'noClickBike' : 'clickBike';
  
  function addComment(newComment, id){
    setMotor(motor.map(moto => id === motor.id ? {...moto, comment:{newComment}} : moto)
    )}

  
  const className = isDisabled ? 'noClickBike' : 'clickBike';
  const appClass = darkMode ? "appDark" : "appLight";
  const buttonText= darkMode ? "Dark" : "Light";
  
  


  return (
    <div className = {appClass}>
      <button onClick={handleClick} > {buttonText} Mode</button>
      <Header />
      <div></div>
      <InfoContainer motor={
        motor.filter(moto=>moto.selected)} 
        recommendedRoute={recommendedRoute} 
        motoTrip={motor.filter(moto=>moto.selectedForTrip)} 
        resetBikes={resetBikes}
        disableClick={disableClick}
        />
      <MotorcycleContainer 
        motor={motor.slice(startBikes, startBikes + display)} 
        nextBikes={nextBikes} 
        handleClick={selectBikes}
        disableClick={disableClick}
        className={className}
        appClass={appClass}
        />
    </div>
  );
};

export default App;