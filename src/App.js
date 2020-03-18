import React, { Fragment, useState }              from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alert      from './components/layout/alert';
import Navbar     from './components/layout/navbar';
import About      from './components/pages/about';
import Search     from './components/users/search';
import User       from './components/users/user';
import Users      from './components/users/users';
import AlertState from './context/alert/alertState';

import GithubState from './context/github/githubState';

const App = () => {

    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className = 'App'>
                        <Navbar />
                        <div className = { 'container' }>
                            <Alert />
                            <Switch>
                                <Route
                                    exact
                                    path = '/'
                                    render = { () => (
                                        <Fragment>
                                            <Search />
                                            <Users />
                                        </Fragment>
                                    ) }
                                />
                                <Route
                                    exact
                                    path = '/about'
                                    component = { About }
                                />
                                <Route
                                    exact
                                    path = '/user/:login'
                                    component = { User }
                                />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
