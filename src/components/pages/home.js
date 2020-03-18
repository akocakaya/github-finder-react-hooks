import React, { Fragment } from 'react';
import Search              from '../users/search';
import Users               from '../users/users';

const Home = props => {
    return (
        <Fragment>
            <Search/>
            <Users />
        </Fragment>
    );
};

export default Home;