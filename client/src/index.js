import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './redux/state';
import { Provider } from 'react-redux';

import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import LoginContainer from './components/Login/LoginContainer';
import RegistrationContainer from './components/Registration/RegistrationContainer';

store.subscribe(() => console.log("new state", store.getState()));
console.log('here store', store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App} >
				<Route path="registration" component={RegistrationContainer} />
				<Route path="login" component={LoginContainer} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);
