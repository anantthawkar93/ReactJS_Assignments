import { useState } from "react";

function TitleModifier() {
  let [title, setTitle] = useState();
  let [title1, setTitle1] = useState();
  let [title2, setTitle2] = useState();
  let [title3, setTitle3] = useState();
  let [title4, setTitle4] = useState();

  function modifier(e) {
    e.preventDefault();
    setTitle(e.target.title.value);
    setTitle1(e.target.title1.value);
    setTitle2(e.target.title2.value);
    setTitle3(e.target.title3.value);
    setTitle4(e.target.title4.value);
  }
  return (
    <div>
      <h2>Title modifier Component</h2>
      <h3>Title1 : {title}</h3>
      <h3>Comment Title: {title1}</h3>
      <h3>Comment Body: {title2}</h3>
      <h3>Comment Title: {title3}</h3>
      <h3>Comment Body: {title4}</h3>

      <form onSubmit={modifier}>
        <input type="text" name="title" placeholder="Enter Title-1" />
        <br />
        <input type="text" name="title1" placeholder="Enter Title-2" />
        <br />
        <input type="text" name="title2" placeholder="Enter Title-3" />
        <br />
        <input type="text" name="title3" placeholder="Enter Title-4" />
        <br />
        <input type="text" name="title4" placeholder="Enter Title-5" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default TitleModifier;
