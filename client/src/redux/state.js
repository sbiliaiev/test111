import { createStore, combineReducers, applyMiddleware } from "redux";
import * as reducers from "./reducers";

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const initialState = {
// 	loginReducer: {
// 		login: '',
// 		password: ''
// 	}
// };

const reducer = combineReducers(reducers);
// const store = createStore(reducer);
 //const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;