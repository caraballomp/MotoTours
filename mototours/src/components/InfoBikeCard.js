import React from "react";


function InfoBikeCard({moto, recommendedRoute }){
    return(
        <div className="container">
        <div className="bike-card">
            <img className="bikeInfoImage" src={moto.Image}></img>
            <h4>{moto.Model}</h4>        
            <ul>
                <li>Year: {moto.Year}</li>
                <li>Power: {moto.Power}</li>
                <li>Category: {moto.Category}</li> 
            </ul>
            <button className="button"
            onClick={()=>recommendedRoute(moto.id)}>Recommended Roads</button>

        </div>
        </div>
    )
}

export default InfoBikeCard;