import React from 'react';
import InfoBikeCard from './InfoBikeCard';
import InfoTripCard from './InfoTripCard';


function InfoContainer ({motor, motoTrip, recommendedRoute, resetBikes, disableClick}) {


    return (
        <div className="bikeInfo">
            <div className="container-info">

                <div className="row">
                    <div className="six columns">
                        {motor.map(moto=><InfoBikeCard key={moto.id} moto={moto} resetBikes={resetBikes} recommendedRoute={recommendedRoute} disableClick={disableClick} />)}

                    </div>
                
                    <div className="six columns">
                        {motoTrip.map(moto=><InfoTripCard key={moto.id} name={moto.Title} moto={moto} resetBikes={resetBikes} />)}
                    </div>
            </div>
            </div>
        </div>
    )
};

export default InfoContainer;