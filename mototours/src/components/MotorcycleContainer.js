import React from 'react';
import MotorcycleButton from './MotorcycleButton';
import MotorcycleCard from './MotorcycleCard';


function MotorcycleContainer({motor, nextBikes}) {   

return (
    <div className= "motor-container"> 
{motor.map((motor) => <MotorcycleCard key={motor.id}  motor={motor}  />)}

<MotorcycleButton onClickRotate = {nextBikes}/>
    </div>
    );
    
};

export default MotorcycleContainer;