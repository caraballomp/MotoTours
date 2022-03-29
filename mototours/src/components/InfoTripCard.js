import React from "react";
import NewCommentForm from "./NewCommentForm"

function InfoTripCard({moto, comment}){

    function addComment(){

    }


    return (
        <div className="trip-info">
            <img className="tripInfoImage" src={moto.Route}></img>
            <NewCommentForm comment={comment} />
        </div>
    )
}
export default InfoTripCard;