import axios                                      from 'axios';
import React, { Component, Fragment }             from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alert  from './components/layout/alert';
import Navbar from './components/layout/navbar';
import About  from './components/pages/about';
import Search from './components/users/search';
import User   from './components/users/user';
import Users  from './components/users/users';

class App extends Component {
    state = {
        loading : false,
        users   : [],
        user    : {},
        alert   : null,
        repos   : [],
    };

    async componentDidMount() {
        this.setState( { loading : true } );

        let res = await axios.get( `https://api.github.com/users?client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }` );

        this.setState(
            {
                loading : false,
                users   : res.data,
            },
        );
    }

    searchUsers = async ( text ) => {
        this.setState( { loading : true } );

        let res = await axios.get( `https://api.github.com/search/users?q=${ text }&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }` );

        this.setState(
            {
                loading : false,
                users   : res.data.items,
            },
        );
    };

    getUser = async ( username ) => {
        this.setState( { loading : true } );

        let res = await axios.get( `https://api.github.com/users/${ username }` );

        this.setState(
            {
                loading : false,
                user    : res.data,
            },
        );
    };

    getUserRepos = async ( username ) => {
        this.setState( { loading : true } );

        let res = await axios.get( `https://api.github.com/users/${ username }/repos?per_page=5&sort=created:asc` );

        this.setState(
            {
                loading : false,
                repos   : res.data,
            },
        );
    };

    clearUsers = async () => {
        this.setState( { loading : true } );

        this.setState(
            {
                loading : false,
                users   : [],
            },
        );
    };

    setAlert = ( msg, type ) => {
        this.setState(
            {
                alert : {
                    msg,
                    type,
                },
            },
        );

        setTimeout( () => this.setState( { alert : null } ), 5000 );
    };

    render() {
        return (
            <Router>
                <div className = 'App'>
                    <Navbar />
                    <div className = { 'container' }>
                        <Alert alert = { this.state.alert } />
                        <Switch>
                            <Route
                                exact
                                path = '/'
                                render = { props => (
                                    <Fragment>
                                        <Search
                                            searchUsers = { this.searchUsers }
                                            clearUsers = { this.clearUsers }
                                            setAlert = { this.setAlert }
                                        />
                                        <Users
                                            loading = { this.state.loading }
                                            users = { this.state.users }
                                        />
                                    </Fragment>
                                ) }
                            />
                            <Route
                                exact
                                path = '/about'
                                render = { props => (
                                    <About />
                                ) }
                            />
                            <Route
                                exact
                                path = '/user/:login'
                                render = { props => (
                                    <User { ...props }
                                          getUser = { this.getUser }
                                          user = { this.state.user }
                                          loading = { this.state.loading }
                                          getUserRepos = { this.getUserRepos }
                                          repos = { this.state.repos }
                                    />
                                ) }
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
