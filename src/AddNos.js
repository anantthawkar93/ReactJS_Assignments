import { useState } from "react";

function AddNos() {
  let [number, setNumber] = useState();
  let [sum, setSum] = useState();

  function addfun() {
    let array = number.split(",");
    alert(array);
    setSum(
      array.reduce(
        (previous, current) => parseInt(previous) + parseInt(current)
      )
    );
  }
  return (
    <div>
      <h2>
        <i>Adding No.s Component</i>
      </h2>
      <h2>
        <i>Add No.s : {sum}</i>
      </h2>
      <input
        type="text"
        placeholder="Insert numbers"
        onInput={(event) => {
          setNumber(event.target.value);
        }}
      />
      <button onClick={addfun}>Add Nos</button>
    </div>
  );
}
export default AddNos;
