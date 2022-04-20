import React, { useState } from "react";

export const CommentNew = () => {
  const [comment, setComment] = useState([]);

  //input field states
  const [addComment, setAddComment] = useState({
    comment_title: "",
    comment_body: "",
    author_name: "",
    submission_date: ""
  });

  //form handling change event
  const handleAddCommentchange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newAddComment = { ...addComment };
    newAddComment[fieldName] = fieldValue;
    setAddComment(newAddComment);
  };

  //form handling submit event
  const handleAddCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      comment_title: addComment.comment_title,
      comment_body: addComment.comment_body,
      author_name: addComment.author_name,
      submission_date: addComment.submission_date
    };
    const newComments = [...comment, newComment];
    setComment(newComments);
    event.target.name = "";
    console.log(newComments);
  };

  //Delete Comment Fucntion
  const removeComment = (indexToDelete) => {
    const newComments = comment.filter((val, index) => {
      if (index === indexToDelete) return false;
      return true;
    });
    setComment(newComments);
  };

  const handleDeleteClick = (commentId) => {
    newComments = [...comment];
    const index = comment.findIndex((comment) => comment.id === commentId);
    newComments.splice(index, 1);
    setComment(newComments);
  };

  //Clear function
  const clearComments = () => {
    setComment([]);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Comment_Title</th>
            <th>Comment_Body</th>
            <th>Author_Name</th>
            <th>Submission_Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {comment.map((comment) => (
            <tr>
              <td>{comment.comment_title}</td>
              <td>{comment.comment_body}</td>
              <td>{comment.author_name}</td>
              <td>{comment.submission_date}</td>
              <td><button onClick={handleDeleteClick()}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>
        <i>Add New Comment</i>
      </h2>
      <button onClick={clearComments}>Clear All</button>
      <form onSubmit={handleAddCommentSubmit}>
        <input
          type="text"
          name="comment_title"
          required="required"
          placeholder="Enter a comment title"
          onChange={handleAddCommentchange}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          name="comment_body"
          required="required"
          placeholder="Enter a comment body"
          onChange={handleAddCommentchange}
        />
        &nbsp;&nbsp;
        <input
          type="text"
          name="author_name"
          required="required"
          placeholder="Enter a author name"
          onChange={handleAddCommentchange}
        />
        &nbsp;&nbsp;
        <input
          type="date"
          name="submission_date"
          required="required"
          placeholder="Enter a submission date"
          onChange={handleAddCommentchange}
        />
        &nbsp;&nbsp;
        <button type="submit">Add</button>
      </form>
      {/*render code for removing comment */}
      {comment.map((val, index) => {
        <div>
          {val}
          <button
            onClick={() => {
              removeComment(index);
            }}
          >
            Delete
          </button>
        </div>;
      })}
    </div>
  );
};
export default CommentNew;
