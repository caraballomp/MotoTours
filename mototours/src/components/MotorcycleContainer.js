import React from 'react';
import MotorcycleButton from './MotorcycleButton';
import MotorcycleCard from './MotorcycleCard';


function MotorcycleContainer({motor, nextBikes, handleClick}) {   

return (
    <div className="container">
        <div className= "motor-container">{motor.map((motor) => <MotorcycleCard key={motor.id}  motor={motor} handleClick={handleClick}  />)}</div>   
    <div id="rotate button">{<MotorcycleButton onClickRotate = {nextBikes}/>}</div>

    </div>
    );
    
};

export default MotorcycleContainer;