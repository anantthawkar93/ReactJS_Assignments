import React from "react";

function Counter() {
  let title = "Welcome to Counter Component";
  let count = 0;
  count++;

  const sayHi = () => {
    alert("Hi");
  };
  const alertCount = () => {
    alert(`Count = ${count}`);
  };
  const increase = () => {
    count = count + 1;
  };
  const decrease = () => {
    count = count - 1;
  };
  return (
    <div className="login">
      <h1>
        <i>{title}</i>
      </h1>
      <br />
      <div>Count = {count}</div>
      <button onClick={sayHi}>Say Hi</button>
      <button onClick={alertCount}>Show updated count</button>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <br />
      <h4>
        <i>
          Note:updated value will be alerted as currently we are not using
          setstate
        </i>
      </h4>
    </div>
  );
}

export default Counter;