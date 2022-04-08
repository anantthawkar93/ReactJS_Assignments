import { Component } from "react";

class ClassBasedLogin extends Component {
  constructor() {
    super();
    //super means calling the parent constructor.
    //what is parent class? component
    this.state = {
      title: "This is state variable title",
      count: 0,
      greetMsg: "HI, Please Login"
    };
  }
  onChangeTitle = () => {
    let newTitle =
      "Login Successfull!!! \n Welcome to Class based Login Component";
    let newGreetMsg = "Good Morning";
    this.setState({
      title: newTitle,
      greetMsg: newGreetMsg,
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div className="login">
        <h3>{this.state.count}</h3>
        <h3>{this.state.title}</h3>
        <h3>{this.state.greetMsg}</h3>
        <br />
        <input type="text" placeholder="Enter Username" />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <button onClick={this.onChangeTitle}>Login</button>
      </div>
    );
  }
}
export default ClassBasedLogin;
