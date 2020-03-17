import React, { Component } from 'react';
import axios                from 'axios';
import './App.css';
import Alert                from './components/layout/alert';

import Navbar from './components/layout/navbar';
import Users  from './components/users/users';
import Search from './components/users/search';

class App extends Component {
    state = {
        loading : false,
        users   : [],
        alert   : null,
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

        setTimeout(() => this.setState({alert : null}), 5000);
    };

    render() {
        return (
            <div className = 'App'>
                <Navbar />
                <div className = { 'container' }>
                    <Alert alert = { this.state.alert } />
                    <Search
                        searchUsers = { this.searchUsers }
                        clearUsers = { this.clearUsers }
                        setAlert = { this.setAlert }
                    />
                    <Users
                        loading = { this.state.loading }
                        users = { this.state.users }
                    />
                </div>
            </div>
        );
    }
}

export default App;
