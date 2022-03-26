import React from 'react';
import MotorcycleButton from './MotorcycleButton';
import MotorcycleCard from './MotorcycleCard';


function MotorcycleContainer({motor}) {
    
return (
    <div> 
{motor.map((motor) => <MotorcycleCard key={motor.id}  motor={motor} cardText="MotorcycleCard" />)}

<MotorcycleButton />
    </div>
    );
    
};

export default MotorcycleContainer;