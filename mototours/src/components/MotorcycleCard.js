import React, {useState} from 'react';


function MotorcycleCard (prop) {

const [i , setI] = useState (1);
    
return (
<div key={prop.motor.id} >
    <img className= {prop.key === i + 1 ? "motors active-bike" : "motors"} src={prop.motor.Image} alt={prop.motor.id} />
    <p>{prop.motor.key}</p>
</div>
    );
}


export default MotorcycleCard;

