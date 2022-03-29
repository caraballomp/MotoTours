import React from "react";
import NewCommentForm from "./NewCommentForm"

function InfoTripCard({moto, comment}){

    function addComment(){

    }


    return (
        <div className="trip-info">
        <div className="row">
            <img className="tripInfoImage" src={moto.Route}></img>
            <h3>{moto.Title} </h3> 
            
            <NewCommentForm comment={comment} />
            </div>
        </div>
    )
}
export default InfoTripCard;