function LoginNew() {
    const loginAlert = () => {
      alert("You are Logged in Successfully!!!");
    };
    return (
      <div className="loginNew">
        <h3>
          <i>Welcome to New Login Component</i>
        </h3>
        <input type="text" placeholder="Enter Username" />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <button onClick={loginAlert}>Login</button>
      </div>
    );
  }
  export default LoginNew;