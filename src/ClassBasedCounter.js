import { Component } from "react";

class ClassBasedCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: (this.count = 0) });
  };
  render() {
    return (
      <div>
        <h2>
          <i>Class based Counter Component</i>
        </h2>
        <h2>count = {this.state.count}</h2>

        <button onClick={this.increase}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
export default ClassBasedCounter;
