import React from "react";
import NewCommentForm from "./NewCommentForm"

function InfoTripCard({moto}){


    return (
        <div className="trip-info">
        <div className="row">
            <img className="tripInfoImage" src={moto.Route}></img>
            <h3>{moto.Title} </h3> 
            
            <NewCommentForm key= {moto.id} moto={moto.comment} />
            <p>{moto.comment}</p>
            </div>
        </div>
    )
}
export default InfoTripCard;