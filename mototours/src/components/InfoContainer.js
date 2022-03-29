import React from 'react';
import InfoBikeCard from './InfoBikeCard';
import InfoTripCard from './InfoTripCard';


function InfoContainer ({motor, motoTrip, recommendedRoute, resetBikes}) {


    return (
        <div className="bikeInfo">
            <div className="container">
                <div className="row">
                    <div className="six columns">
                        {motor.map(moto=><InfoBikeCard key={moto.id} moto={moto} resetBikes={resetBikes} recommendedRoute={recommendedRoute}/>)}
                    </div>
                    <div className="six columns">
                        {motoTrip.map(moto=><InfoTripCard key={moto.id} moto={moto} />)}
                    </div>
            </div>
            </div>
        </div>
    )
};

export default InfoContainer;