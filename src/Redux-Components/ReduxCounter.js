/*
A. Redux: Predictable state container for Javascript apps.

1. Redux is for javascript applications.
   Redux is not tied to React.
   Can be used with React, Angular, Vue or even Vanilla Javascript.
2. Redux is a state container - Stores the states of your application.

B. State of an app is the state repesented by all the individual
components of that app.

C. Redux will store and manage the application state.

Redux is predictable => means in redux, all the state transitions are
explicit and it is possible to keep track of them.

The changes to our application's state becomes predictable.

Redux => Store <--> Action <--> Reducer
*/

import {useSelector,useDispatch} from "react-redux";
const ReduxCounter = () =>{
const count = useSelector((state)=>{
        console.log(state);
        return state.count;
    });
    const dispatch = useDispatch();
    const increase = () =>{
        dispatch({type: 'increase'});
    }
    const decrease = () =>{
        dispatch({type: 'decrease'});
    }
    const reset = () => {
        dispatch({type: 'reset'});
    };
    return(
        <div className="border">
            count = {count}
            <br/>
            <button onClick={increase}>Increase</button>
		    <button onClick={decrease}>Decrease</button>
		    <button onClick={reset}>Reset</button>
        </div>
    );    
}
export default ReduxCounter;