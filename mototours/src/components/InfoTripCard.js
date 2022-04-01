import React from "react";
import NewCommentForm from "./NewCommentForm"

function InfoTripCard({moto, addComment}){

 
    return (
        <div className="trip-info">
        <div className="row">
            <img className="tripInfoImage" src={moto.Route}></img>
            <h3>{moto.Title} </h3> 
            {moto.Comments.map((comment, index) => <p key={index}>{comment}</p>)}
            <NewCommentForm key= {moto.id} moto={moto} addComment={addComment} />
        
            </div>
        </div>
    )
}
export default InfoTripCard;