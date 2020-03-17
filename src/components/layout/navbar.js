import React, { Component } from 'react';
import PropTypes            from 'prop-types';

const Navbar = ( props ) => {
    return (
        <nav className = 'navbar bg-primary'>
            <h1>
                <i className = 'fab fa-github' />
                Navbar
            </h1>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;