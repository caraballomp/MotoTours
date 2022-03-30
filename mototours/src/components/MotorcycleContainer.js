import React, {useState} from 'react';
import MotorcycleButton from './MotorcycleButton';
import MotorcycleCard from './MotorcycleCard';


function MotorcycleContainer({motor, nextBikes, handleClick, disableClick, className}) {   



return (
    <div className="container">
        <div className= "motor-container">{motor.map((motor) => <MotorcycleCard className={className} key={motor.id}  motor={motor} handleClick={handleClick} disableClick={disableClick}/>)}</div>   
    <div id="rotate button">{<MotorcycleButton onClickRotate = {nextBikes}/>}</div>

    </div>
    );
    
};

export default MotorcycleContainer;