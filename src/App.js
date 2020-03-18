import React                                      from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alert      from './components/layout/alert';
import Navbar     from './components/layout/navbar';
import About      from './components/pages/about';
import Home       from './components/pages/home';
import NotFound   from './components/pages/notFound';
import User       from './components/users/user';
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
                                    component = { Home }
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
                                <Route
                                    component = { NotFound }
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
