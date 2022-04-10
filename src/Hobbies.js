import {useState} from "react";

const Hobbies = () => {
	const [hobbies,setHobbies] = useState(["reading","writing"]);
	const addHobby = (event) => {
		event.preventDefault();
		const newHobbies = [...hobbies,event.target.hobby.value];
		setHobbies(newHobbies);
		event.target.hobby.value = "";
	};
	const removeHobby = (indexToDelete) => {
		const newHobbies = hobbies.filter((val,index) => {
			if(index === indexToDelete) return false;
			return true;
		});
	setHobbies(newHobbies);
	}
	const clearHobbies = () => {
		setHobbies([]);
	};
	return (
		<div>
		<button onClick={clearHobbies}>Clear All</button>
		<form onSubmit = {addHobby}>
			<input type="text" name="hobby"/>
			<button>Add Hobby</button>
			</form>
			{hobbies.map((val,index) => {
				return (
				  <div>
				    {val}
				    <button 
				    onClick={() => {
				    	removeHobby(index);
				    }}
				    >
				    Delete 
				    </button>
				  </div>
				);
			})}
		</div>
		);
};
export default Hobbies;