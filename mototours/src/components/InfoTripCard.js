import React from "react";

function InfoTripCard({moto}){
    return (
        <div className="trip-info">
            <img className="tripInfoImage" src={moto.Route}></img>
        </div>
    )
}
 export default InfoTripCard;