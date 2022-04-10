import React from "react";

class ClassBasedCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    };
  }

  doOperation = (e) => {
    e.preventDefault();
    let numberOne = parseInt(e.target.numberOne.value);
    let numberTwo = parseInt(e.target.numberTwo.value);
    let operation = e.target.operation.value;
    if (operation === "add") {
      this.setState({ result: numberOne + numberTwo });
    } else if (operation === "multiply") {
      this.setState({ result: numberOne * numberTwo });
    } else if (operation === "subtract") {
      this.setState({ result: numberOne - numberTwo });
    } else if (operation === "divide") {
      this.setState({ result: numberOne / numberTwo });
    }
  };

  render() {
    return (
      <div>
        <h2>
          <i>Class Based Calculator Component</i>
        </h2>
        <h3> Result = {this.state.result} </h3>
        <form onSubmit={this.doOperation}>
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
}
export default ClassBasedCalculator;
