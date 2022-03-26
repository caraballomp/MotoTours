import React from 'react';


function MotorcycleCard ({motor}) {
console.log(motor);
return (
<div className="motors" key={motor.id}>
    <> {motor.Model}</>
    <img className="motors" src={motor.Image} alt={motor.id} />
</div>
    );
}


export default MotorcycleCard;

// "id": 3,
// "Category":"Adventure Bike",
// "Model":"YAMAHA TENERE 700",
// "Year":"2019",
// "Power":"72.1 hp",
// "Image":"https://monimoto.com/media/Yamaha-Tenere-700.jpg",
// "Lot":""