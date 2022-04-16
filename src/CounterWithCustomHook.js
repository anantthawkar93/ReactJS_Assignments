import {useState} from "react";

function CounterWithCustomHook() {
	
	let [count,setCount, increase, decrease, reset] = useCounterLogic();
	
	return (
		<div>
		   <h1>SmartCounter</h1>
		   <button onClick = {increase}>Increase</button>
		   <button onClick = {decrease}>Decrease</button>
		   <button onClick = {reset}>Reset</button>
		</div>
	);
}

function useCounterLogic(){
	let [count,setCount] = useState(0);

	function increase() {
		setCount(count + 1);
	}
	function decrease() {
		setCount(count - 1);
	}
	function reset() {
		setCount(0);
	}

	return [count,setCount, increase, decrease, reset];
}
export default CounterWithCustomHook;