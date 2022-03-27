import React from 'react';


function MotorcycleCard (prop) {


return (
<div key={prop.motor.id} >
    <img className= "motors" src={prop.motor.Image} alt={prop.motor.id} />
    <p>{prop.motor.key}</p>
</div>
    );
}


export default MotorcycleCard;

