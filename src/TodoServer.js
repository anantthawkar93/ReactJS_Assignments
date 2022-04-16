import { useState, useEffect } from "react";
import axios from "axios";

const TodoServer = () => {
	let [todos, setTodos] = useState([
		{ name: "initial value" , status: "complete" },
		]);
    let [id,setId] = useState(0);
	const callServer = () => {
	axios.get("todos").then(function(res) {
		console.log(res.data);
		setTodos(res.data);
	   });
	};
	const callServerWithId = () => {
		axios.get("todos/" + id).then(function(res) {
			console.log(res.data);
			//setTodos(res.data);
		});
	};
	return (
	<div>
	   <button onClick = {callServer}>Call Server</button>
		{todos.map((val) => {
			return (
			<div>
			Name:{val.name} and status = {val.status}
			</div>
			);
		})}
		<button onClick = {callServerWithId}>Get single Todo </button>
		<input 
		  type="number"
		  value={id}
		  onInput={(event) => setId(event.target.value)}
		  />
	</div>
	);
};

export default TodoServer;