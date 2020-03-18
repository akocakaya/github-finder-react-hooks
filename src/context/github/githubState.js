import axios                 from 'axios';
import React, { useReducer } from 'react';
import GithubContext         from './githubContext';
import GithubReducer         from './githubReducer';

import {
    SEARCH_USERS,
    SET_LOADING,
    GET_USERS,
    GET_USER,
    GET_USER_REPOS,
    CLEAR_USERS
} from '../type';

const GithubState = props => {
    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading : false
    };

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async ( text ) => {
        setLoading();

        let res = await axios.get( `https://api.github.com/search/users?q=${ text }&client_id=${ process.env.REACT_APP_GITHUB_CLIENT_ID }&client_secret=${ process.env.REACT_APP_GITHUB_CLIENT_SECRET }` );

        dispatch({
            type: SEARCH_USERS,
            payload:res.data.items
         });
    };

    const getUser = async ( username ) => {
        setLoading();

        let res = await axios.get( `https://api.github.com/users/${ username }` );

        dispatch({
            type: GET_USER,
            payload : res.data
                 });
    };

    const clearUsers = async () => dispatch({type:CLEAR_USERS});

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser
        }}>
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;