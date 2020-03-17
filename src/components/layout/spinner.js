import React, { Component, Fragment } from 'react';
import PropTypes                      from 'prop-types';
import spinner from './spinner.gif';

class Spinner extends Component {
    render() {
        return (
            <Fragment>
                <img src={spinner} alt={'Loading...'} className={'spinner'} />
            </Fragment>
        );
    }
}

Spinner.propTypes = {};

export default Spinner;