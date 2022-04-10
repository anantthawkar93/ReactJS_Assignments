import PropTypes from "prop-types";

function Greet(props) {
	return(
		<div>
			<h1>{props.message}</h1>
			<h2>The time is {props.timeValue.toString()}</h2>
			<h3>{props.no}</h3>
		</div>
	);
}
Greet.propTypes = {
	message : PropTypes.string,
	timeValue: PropTypes.string,
	no: PropTypes.string,
};

function SimpleComponent() {
	return <div> I am a simple Component</div>;
}

function SimpleComponentOne() {
	return <div> I am a simple Component one</div>;
}

export default Greet;
export {SimpleComponent,SimpleComponentOne};