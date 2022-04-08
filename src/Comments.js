import React from "react";
import Comment from "./Comment";

function Forum() {
  return (
    <div className="forum">
      <form>
        <h3>
          <i>Forum Component</i>
        </h3>
        <label>
          <input type="text" name="title" placeholder="Enter Forum Title" />
        </label>
        <br />
        <input type="date" placeholder="Enter Current Date" />
        <br />
        <textarea
          type="text"
          placeholder="Enter Description here"
          rows="3"
          cols="100"
        ></textarea>
      </form>
      <Comment />
    </div>
  );
}
export default Forum;
