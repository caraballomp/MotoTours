import React, {useState} from 'react';
import MotorcycleButton from './MotorcycleButton';
import MotorcycleCard from './MotorcycleCard';


function MotorcycleContainer({motor}) {   
    const [index, setIndex] = useState (1);

return (
    <div className= "motor-container"> 
{motor.map((motor) => <MotorcycleCard key={index}  motor={motor}  />)}

<MotorcycleButton onClick={setIndex (index + 1)} />
    </div>
    );
    
};

export default MotorcycleContainer;