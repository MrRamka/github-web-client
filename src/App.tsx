import React from 'react';
import './App.css';
import { Routes as R } from './constants';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginOAuth } from './pages/LoginOAuth';
import { Profile } from './pages/Profile';
import { PrivateRoute } from './components/PrivateRouter';
import { ApolloProvider } from '@apollo/client';
import { client } from './api';


function App() {

	return (
		<ApolloProvider client={client}>
			<Router>
				<Switch>
					<Route exact path={R.LOGIN} component={Login}/>
					<Route exact path={R.OATH_LOGIN} component={LoginOAuth}/>
					<PrivateRoute exact path={[R.ROOT, R.PROFILE]} component={Profile}/>
					{
						//TODO add all routes
					}
					<Redirect to={R.ROOT}/>
				</Switch>
			</Router>
		</ApolloProvider>
	);
}

export default App;
