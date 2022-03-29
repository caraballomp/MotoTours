import React, {useState} from "react";

function NewCommentForm({ addComment }) {

const [comment, setComment] = useState("");


function handleComment(e) {
      setComment(e.target.value);
    }


    const handleSubmit = (e) => {
      e.preventDefault()

      const formData ={
      comment,
      }
      fetch("http://localhost:3001/comments", {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then((r) => r.json())
      .then(newComment => {addComment(newComment)})
      };
    

    return (
      <form className="" onSubmit= {handleSubmit} >
  <textarea
          placeholder="Write experience here"
          rows={10}
          onChange={handleComment}
        />
        <input type="submit" value="Share your experience" />
      </form>
    );
    }

    export default NewCommentForm;