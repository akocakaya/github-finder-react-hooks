import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import UserItem             from './user-item';
import Spinner              from '../layout/spinner';

const Users = ( { users, loading } ) => {

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