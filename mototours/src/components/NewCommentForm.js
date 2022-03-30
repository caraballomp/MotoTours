import React, {useState} from "react";

function NewCommentForm({moto}) {


const [comment, setComment] = useState();


function handleComment(e) {
  setComment(e.target.value);
  // console.log("ID", moto.id)
  // console.log("COMMENT: ", moto.Comment)
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const formData = {
      id: `${moto}`,
      Comment: `${comment}`
      }
      fetch(`http://localhost:3001/motor/${moto.id}`, {
        method: 'PATCH',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)  
      })
      .then((r) => r.json())
        .then(data => setComment(comment));
      }
    
  

    return (
      <form className="" onSubmit={handleSubmit} >
      <label>Review</label>
  <textarea
          placeholder="Write experience here"
          rows={10}
          onChange={handleComment}
        />
        <input type="submit" value="Share your experience" />
        <p>{ comment }</p>  
        
      </form>
    );
    }

    export default NewCommentForm;