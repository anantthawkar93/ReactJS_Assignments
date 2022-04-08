import { useState } from "react";

function ScientificCalculator() {
  let [result, setResult] = useState();

  function doOperation(e) {
    e.preventDefault();
    let DegreeNo = parseInt(e.target.DegreeNo.value);
    DegreeNo = DegreeNo * (Math.PI / 180);

    let operation = e.target.operation.value;
    if (operation === "Sin()") {
      setResult(Math.sin(DegreeNo));
    } else if (operation === "Cos()") {
      setResult(Math.cos(DegreeNo));
    } else if (operation === "Tan()") {
      setResult(Math.tan(DegreeNo));
    }
  }
  return (
    <div>
        <h2><i> Scientific Calculator</i></h2>
        <h2><i> Result : {result}</i></h2>
      <form onSubmit={doOperation}>
        <input type="number" name="DegreeNo" placeholder="Enter Degree value" />
        <select name="operation">
          <option>Sin()</option>
          <option>Cos()</option>
          <option>Tan()</option>
        </select>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default ScientificCalculator;
