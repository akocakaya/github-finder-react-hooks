import PropTypes             from 'prop-types';
import React, { useContext } from 'react';
import Spinner               from '../layout/spinner';
import UserItem              from './user-item';
import GithubContext         from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);

    const {loading, users} = githubContext;

    if (loading) {
        return <Spinner />;
    } else {
        return (
            <div className = { 'users-grid' }>
                {
                    users.map(
                        ( user, i ) => (
                            <UserItem
                                key = { 'user-' + i }
                                user = { user }
                            />
                        ) )
                }
            </div>
        );
    }

};

Users.propTypes = {
    users : PropTypes.object,

};

export default Users;
