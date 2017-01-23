import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";

// const initialState = {
// 	loginReducer: {
// 		login: '',
// 		password: ''
// 	}
// };

const reducer = combineReducers(reducers);
// const store = createStore(reducer);
 const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;