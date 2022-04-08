import React from "react";

function Comments() {
  return (
    <div className="commentSection">
      <h2>
        <i>Comment Section</i>
      </h2>
      <div className="comment">
        <div className="CommentHeading">
          <h3>Comment Topic:</h3>
          <textarea rows="2" cols="150"></textarea>
          <h4>Author Name:</h4>
          <textarea rows="2" cols="150"></textarea>
          <h5>Comment Body:</h5>
          <textarea rows="4" cols="150"></textarea>
        </div>
      </div>

      <div className="comment">
        <div className="CommentHeading">
          <h3>Comment Topic: </h3>
          <textarea rows="2" cols="150"></textarea>
          <h4>Author Name: </h4>
          <textarea rows="2" cols="150"></textarea>
          <h5>Comment Body: </h5>
          <textarea rows="4" cols="150"></textarea>
        </div>
      </div>

      <div className="comment">
        <div className="CommentHeading">
          <h3>Comment Topic: </h3>
          <textarea rows="2" cols="150"></textarea>
          <h4>Author Name: </h4>
          <textarea rows="2" cols="150"></textarea>
          <h5>Comment Body:</h5>
          <textarea rows="4" cols="150"></textarea>
        </div>
      </div>
    </div>
  );
}
export default Comments;
