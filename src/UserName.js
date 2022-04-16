import UserContext from "./UserContext";
import {useContext} from "react";

const UserName = () =>{
	const userObjectValue = useContext(UserContext);
	return(
		<div>
			<h3>My name is {userObjectValue.name}</h3>
		</div>
		);
}
export default UserName;
