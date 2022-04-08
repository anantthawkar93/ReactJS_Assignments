function CounterPlus2() {
    let title = "CounterPlus2 component";
    let count = 0;
    const increase = () => {
      count += 2;
    };
    const decrease = () => {
      count -= 2;
    };
    const reset = () => {
      count = 0;
    };
    const alertCount = () => {
      alert(`Count = ${count}`);
    };
    return (
      <div className="counterPlus2">
        <h3>
          <i>{title}</i>
        </h3>
  
        <div>Count = {count}</div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={alertCount}>Show Updated Count</button>
        <br />
        <h4>
          <i>
            Note:updated Count value will be alerted as currently we are not using
            States
          </i>
        </h4>
      </div>
    );
  }
  export default CounterPlus2;
  