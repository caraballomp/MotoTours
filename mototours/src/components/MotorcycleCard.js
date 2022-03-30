import React, { useState }  from 'react';


function MotorcycleCard ({motor, handleClick, disableClick, className}) {


return (
<div className={className} key={motor.id} 
    onClick={()=>{handleClick(motor.id); disableClick()}}
>
    <img className= "motors" src={motor.Image} alt={motor.id} />
    <p>{motor.key}</p>
</div>
    );
}


export default MotorcycleCard;

