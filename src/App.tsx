import React from 'react';
import './App.css';
import { Routes as R } from './constants';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Login } from './pages/Login';
import { LoginOAuth } from './pages/LoginOAuth';
import { ProfilePage } from './pages/Profile';
import { PrivateRoute } from './components/PrivateRoute';
import { ApolloProvider } from '@apollo/client';
import { client } from './api';
import { Logout } from './pages/Logout';
import { Issues } from './pages/Issues';
import { PullRequestsPage } from './pages/PullRequests';
import { Explore } from './pages/Explore';
import { RepositoriesPage } from './pages/Repositories';
import { RepositoryPage } from './pages/Repository';
import { UserProfilePage } from './pages/UserProfile';
import { UserRepositoriesPage } from './pages/UserRepositories';
import { NotFoundPage } from './pages/NotFound';


function App() {

    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path={R.LOGIN} component={Login}/>
                    <Route exact path={R.OATH_LOGIN} component={LoginOAuth}/>
                    <PrivateRoute exact path={[R.ROOT, R.PROFILE]} component={ProfilePage}/>
                    <PrivateRoute exact path={R.LOGOUT} component={Logout}/>
                    <PrivateRoute exact path={R.ISSUES} component={Issues}/>
                    <PrivateRoute exact path={R.PULL_REQUESTS} component={PullRequestsPage}/>
                    <PrivateRoute exact path={R.EXPLORE} component={Explore}/>
                    <PrivateRoute exact path={R.REPOSITORIES} component={RepositoriesPage}/>
                    <PrivateRoute exact path={R.REPOSITORY} component={RepositoryPage}/>
                    <PrivateRoute path={R.USER} component={UserProfilePage}/>
                    <PrivateRoute exact path={R.USER_REPOSITORY} component={UserRepositoriesPage}/>
                    <PrivateRoute path={R.NOT_FOUND} component={NotFoundPage}/>
                    <Redirect to={R.NOT_FOUND}/>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
