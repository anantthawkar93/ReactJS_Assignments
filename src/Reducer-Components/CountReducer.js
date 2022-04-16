/* Reducers:
1. Specifies how the application's states changes in response 
to the actions sent to the store.

2.Function that accepts 'state' and 'action' as arguments
and returns the nxt state of the application.

3.Simplest form of Representation:-
(previousState, action) => newState
                OR
(initialStat, action) => newState
*/


const initialState = { count: 0};

function CountReducer(state = initialState, action){
	if(action.type == 'increase'){
		let newState = { count: state.count + 1};
		return newState;
	}
	if(action.type == 'decrease'){
		let newState = { count: 0};
		return newState;
	}
	if(action.type == 'reset'){
		let newState = { count:0};
		return newState;
	}
	return state;
}
export default CountReducer;
