import React from 'react';


function MotorcycleCard ({motor, handleClick}) {


return (
<div key={motor.id} 
    onClick={()=>handleClick(motor.id)}>
    <img className= "motors" src={motor.Image} alt={motor.id} />
    <p>{motor.key}</p>
</div>
    );
}


export default MotorcycleCard;

