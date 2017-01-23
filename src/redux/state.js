import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";

// const initialState = {
// 	loginReducer: {
// 		login: '',
// 		password: ''
// 	}
// };

const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default store;