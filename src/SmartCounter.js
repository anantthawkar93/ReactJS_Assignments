import { useState } from "react";

function SmartCounter() {
  let returnUseState = useState(2);
  console.log(returnUseState);
  console.log("function loaded again");
  let [count, setCount] = returnUseState;
  let [title, setTitle] = useState("Initial Title");

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }

  function changeTitle(e) {
    console.log(e);
    //it prevents the default behavior of the event.The default behavior is to submit the form and reload the page.
    e.preventDefault();
    console.log(e.target);
    //we get formTag from e.target
    // let formTag = e.target;
    //if we have form tag we can get any input tag using formtagobject.<nameofTag>
    // let inputTag = formTag.title;
    //inputtag.value gives me the value
    let newTitle = e.target.title.value;
    setTitle(newTitle);
  }
  return (
    <div>
      <h2>
        <i>SmartCounter Component using useState</i>
      </h2>
      <h3>
        <i>Count = {returnUseState[0]}</i>
      </h3>
      <h3>
        <i>{title}</i>
      </h3>
      <form onSubmit={changeTitle}>
        <input type="text" name="title" />
        <button>Submit</button>
      </form>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default SmartCounter;
