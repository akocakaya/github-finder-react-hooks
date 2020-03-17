import axios                                      from 'axios';
import React, { Fragment, useState }              from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Alert  from './components/layout/alert';
import Navbar from './components/layout/navbar';
import About  from './components/pages/about';
import Search from './components/users/search';
import User   from './components/users/user';
import Users  from './components/users/users';

const App = () => {

    const [ users, setUsers ]     = useState( [] );
    const [ loading, setLoading ] = useState( false );
    const [ user, setUser ]       = useState( {} );
    const [ alert, setAlert ]     = useState( null );
    const [ repos, setRepos ]     = useState( [] );

    const searchUsers = async ( text ) => {
        setLoading( true );

        let res = await axios.get( `https://api.github.com/search/users?q=${ text }&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }` );

        setUsers( res.data.items );
        setLoading( false );
    };

    const getUser = async ( username ) => {
        setLoading( true );

        let res = await axios.get( `https://api.github.com/users/${ username }` );

        setUser( res.data );
        setLoading( false );
    };

    const getUserRepos = async ( username ) => {
        setLoading( true );

        let res = await axios.get( `https://api.github.com/users/${ username }/repos?per_page=5&sort=created:asc` );

        setRepos( res.data );
        setLoading( false );
    };

    const clearUsers = async () => {
        setLoading( true );

        setUsers( [] );
        setLoading( false );
    };

    const showAlert = ( msg, type ) => {
        setAlert( {
                      msg,
                      type,
                  } );

        setTimeout( () => setAlert( null ), 5000 );
    };

    return (
        <Router>
            <div className = 'App'>
                <Navbar />
                <div className = { 'container' }>
                    <Alert alert = { alert } />
                    <Switch>
                        <Route
                            exact
                            path = '/'
                            render = { props => (
                                <Fragment>
                                    <Search
                                        searchUsers = { searchUsers }
                                        clearUsers = { clearUsers }
                                        setAlert = { showAlert }
                                    />
                                    <Users
                                        loading = { loading }
                                        users = { users }
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
                                      getUser = { getUser }
                                      user = { user }
                                      loading = { loading }
                                      getUserRepos = { getUserRepos }
                                      repos = { repos }
                                />
                            ) }
                        />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};

export default App;
