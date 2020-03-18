import PropTypes                                  from 'prop-types';
import React, { Fragment, useContext, useEffect } from 'react';
import { Link }                                   from 'react-router-dom';
import Spinner                                    from '../layout/spinner';
import Repos                                      from '../repos/repos';
import GithubContext                              from '../../context/github/githubContext';

const User = ( { getUserRepos, repos, match } ) => {
    const githubContext = useContext(GithubContext);

    const { user, loading, getUser } = githubContext;

    useEffect( () => {
        getUser( match.params.login );
        getUserRepos( match.params.login );
    }, [] );

    const {
              name,
              avatar_url,
              location,
              bio,
              blog,
              company,
              login,
              html_url,
              followers,
              following,
              public_repos,
              public_gists,
              hirable,
          } = user;

    if (loading) {
        return <Spinner />;
    }

    return (
        <Fragment>
            <Link
                to = '/'
                className = 'btn btn-light'
            >
                Back to Search
            </Link>
            Hirable : { ' ' }
            {
                hirable ? <i className = 'fas fa-check text-success' />
                        : <i className = 'fas fa-times-circle text-danger' />
            }
            <div className = 'card grid-2'>
                <div className = 'all-center'>
                    <img
                        src = { avatar_url }
                        className = 'round-img img-lrg'
                        alt = ''
                    />
                    <h1>{ name }</h1>
                    <p>Location: { location }</p>
                </div>
                <div>
                    {
                        bio &&
                        <Fragment>
                            <h3>Bio</h3>
                            <p>{ bio }</p>
                        </Fragment>
                    }
                    <a
                        href = { html_url }
                        className = 'btn btn-dark my-1'
                    >
                        Visit github profile
                    </a>
                    <ul>
                        <li>
                            {
                                login &&
                                <Fragment>
                                    <strong>Username: </strong>{ login }
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                company &&
                                <Fragment>
                                    <strong>Company: </strong>{ company }
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                blog &&
                                <Fragment>
                                    <strong>Blog: </strong>{ blog }
                                </Fragment>
                            }
                        </li>
                    </ul>
                </div>
            </div>
            <div className = 'card text-center'>

                <div className = 'badge badge-primary'>
                    Followers : { followers }
                </div>
                <div className = 'badge badge-success'>
                    Following : { following }
                </div>
                <div className = 'badge badge-danger'>
                    Public Repos : { public_repos }
                </div>
                <div className = 'badge badge-dark'>
                    Public Gists : { public_gists }
                </div>

            </div>

            <Repos repos = { repos } />
        </Fragment>
    );
};

User.propTypes = {
    loading      : PropTypes.bool,
    user         : PropTypes.object.isRequired,
    getUser      : PropTypes.func.isRequired,
    getUserRepos : PropTypes.func.isRequired,
    repos        : PropTypes.array.isRequired,
};

export default User;