import { useState } from "react";

function Interest() {
  let [result, setResult] = useState();

  const doOperation = (e) => {
    e.preventDefault();
    let principle = parseInt(e.target.pAmt.value);
    let rateOfInterest = parseInt(e.target.roi.value);
    let year = parseInt(e.target.yr.value);
    let operation = e.target.operation.value;

    if (operation === "simpleInterest") {
      setResult(principle * year * (rateOfInterest / 100.0));
    } else if (operation === "compundInterest") {
      setResult(
        principle * Math.pow(1 - rateOfInterest / 100.0, year) - principle
      );
    }
  };
  return (
    <div>
      <h2>
        <i>Simple Interest & Compound Interest Component</i>
      </h2>
      <h3> Result = {result} </h3>
      <form onSubmit={doOperation}>
        <input type="number" placeholder="Enter Principle Amount" name="pAmt" />
        <input type="number" placeholder="Enter Years" name="yr" />
        <input type="number" placeholder="Enter Rate of Interest" name="roi" />
        <select name="operation">
          <option>simpleInterest</option>
          <option>compoundInterest</option>
        </select>
        <button>Calculate</button>
      </form>
    </div>
  );
}
export default Interest;
