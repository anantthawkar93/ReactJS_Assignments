import React,{useRef} from 'react';

const ExampleUseRef = () =>{
	let initialValue = null;
	const inputRef = useRef(initialValue);
	const h1Ref = useRef(null);
	const showEnteredValue = () =>{
		const inputOb = inputRef.current;
		console.log(inputOb);
		alert(inputOb.value);
		h1Ref.current.innerHTML = "This heading is changed in stupid way. I could have useState Variable"
	}
	return (
		<div>
		<h1 ref={h1Ref}> I am heading</h1>
		<input type="text" ref={inputRef} />
		<button onClick={showEnteredValue}>Show Entered Value</button>
		</div>
		);
}
export default ExampleUseRef;