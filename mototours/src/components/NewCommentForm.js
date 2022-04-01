import React, {useState} from "react";

function NewCommentForm({moto, addComment}) {


const [comment, setComment] = useState("");

const handleComment = (e) => {
  setComment(e.target.value)
}


function handleSubmit(e) {
  e.preventDefault()
  setComment(e.target.value);
  // console.log("ID", moto.id)

  let comments = moto.Comments;  
  comments.push(comment);
  // console.log("new comments : ", comments);

      const formData = {
        Comments: comments
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
        .then(newComment => {
          // console.log("newComment ", newComment);
          addComment(/*newComment, moto.id*/);
        })
      }
    
  

    return (
      <form className="new-comment-form" onSubmit={handleSubmit} >
      <label>Review</label>
  <textarea
          placeholder="Write experience here"
          rows={10}
          value={comment}
          onChange={handleComment}
        />
        <input type="submit" value="Share your experience" />
         
        
      </form>
    );
    }

    export default NewCommentForm;