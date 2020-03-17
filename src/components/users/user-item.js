import React, { Component } from 'react';
import PropTypes            from 'prop-types';

const UserItem = ( props ) => {
    return (
        <div className = 'card text-center'>
            <img
                className = 'round-img'
                src = { props.user.avatar_url }
                style = { { width : '60px' } }
                alt = { 'avatar' }
            />
            <h3>{ props.user.login }</h3>

            <div>
                <a
                    href = { props.user.html_url }
                    className = 'btn btn-dark btn-sm my-1'
                >
                    More
                </a>
            </div>
        </div>
    );
};

UserItem.propTypes = {
    user : PropTypes.object.isRequired,
};

export default UserItem;