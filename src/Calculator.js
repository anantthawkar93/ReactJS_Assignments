import { useState } from "react";

function Calculator() {
  let [result, setResult] = useState(0);

  function doOperation(e) {
    e.preventDefault();
    let numberOne = parseInt(e.target.numberOne.value);
    let numberTwo = parseInt(e.target.numberTwo.value);
    let operation = e.target.operation.value;
    if (operation === "add") {
      setResult(numberOne + numberTwo);
    } else if (operation === "multiply") {
      setResult(numberOne * numberTwo);
    } else if (operation === "subtract") {
      setResult(numberOne - numberTwo);
    } else if (operation === "divide") {
      setResult(numberOne / numberTwo);
    }
  }
  return (
    <div>
      <h2>
        <i>Calculator Component</i>
      </h2>
      <h3> Result = {result} </h3>
      <form onSubmit={doOperation}>
        <input type="number" name="numberOne" placeholder="Enter number 1" />
        <input type="number" name="numberTwo" placeholder="Enter number 2" />
        <select name="operation">
          <option>add</option>
          <option>multiply</option>
          <option>subtract</option>
          <option>divide</option>
        </select>
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default Calculator;
