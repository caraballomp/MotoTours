import React from "react";


function InfoBikeCard({moto, recommendedRoute, resetBikes, disableClick }){
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
            onClick={()=>recommendedRoute(moto.id)}>Recommended Road</button>
            <button className="button"
            onClick={()=> {resetBikes(moto.id); disableClick()}}>Reset</button>
        </div>
        </div>
    )
}

export default InfoBikeCard;