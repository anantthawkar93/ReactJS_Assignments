import UserContext from "./UserContext";
import {useContext} from "react";

const UserCity = () => {
	const userObjectValue = useContext(UserContext);
	return (
		<div>
			<h3>I am from {userObjectValue.city}</h3>
		</div>
		);

}
export default UserCity;