import React from 'react';
import InfoBikeCard from './InfoBikeCard';
import InfoTripCard from './InfoTripCard';

function InfoContainer ({motor, motoTrip, recommendedRoute}) {


    return (
        <div className="bikeinfo">
            <div className="container">
                <div className="row">
                    <div className="six columns">
                        {motor.map(moto=><InfoBikeCard key={moto.id} moto={moto} recommendedRoute={recommendedRoute}/>)}
                    </div>
                    <div className="six columns">
                        {motoTrip.map(moto=><InfoTripCard key={moto.id} moto={moto}/>)}
                    </div>
            </div>
            </div>
        </div>
    )
};

export default InfoContainer;