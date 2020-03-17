import PropTypes from 'prop-types';
import React     from 'react';
import RepoItem  from './repoItem';

const Repos = ( { repos } ) => {
    return (
        repos.map( repo => <RepoItem
            repo = { repo }
            key = { repo.id }
        /> )
    );
};

Repos.propTypes = {
    repos : PropTypes.array.isRequired,
};

export default Repos;