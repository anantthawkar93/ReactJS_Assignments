//Store holds the states of your applications

import {createStore} from "redux";
import CountReducer from "./Reducer-Components/CountReducer";
let store = createStore(CountReducer);
export default store;