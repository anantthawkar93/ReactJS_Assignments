import { useState } from "react";

function IsEven() {
  let [number, setNumber] = useState(" ");
  let [title, setTitle] = useState();

  function even(e) {
    e.preventDefault();
    if (number % 2 === 0) {
      setTitle("Is Even Number");
    } else {
      setTitle("Not a Even Number");
    }
  }

  return (
    <div>
      <h3>Result : {title}</h3>
      <form onSubmit={even}>
        <input
          type="number"
          placeholder="Enter Number"
          value={number}
          onInput={(event) => {
            setNumber(event.target.value);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default IsEven;
