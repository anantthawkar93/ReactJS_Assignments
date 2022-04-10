import { useState } from "react";

function Average() {
  let [number, setNumber] = useState();
  let [avg, setAvg] = useState();

  function avgfun() {
    let array = number.split(",");
    alert(array);
    setAvg(
      array.reduce(
        (previous, current) => parseInt(previous) + parseInt(current)
      ) / array.length
    );
  }
  return (
    <div>
      <h2>
        <i>Average : {avg}</i>
      </h2>
      <input type="text" onInput={(e) => setNumber(e.target.value)} />
      <br />
      <button onClick={avgfun}>Calculate Avg</button>
    </div>
  );
}
export default Average;
