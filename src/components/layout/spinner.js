import React, { Component, Fragment } from 'react';
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

export default Spinner;