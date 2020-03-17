import PropTypes from 'prop-types';
import React     from 'react';

const Alert = ( { alert } ) => {
    return (
        alert !== null && (
            <div className = { `alert alert-${ alert.type }` }>
                <i className = { 'fas- fa-icon-circle' } /> { alert.msg }
            </div>
        )
    );
};

Alert.propTypes = {
    alert : PropTypes.object,
};

export default Alert;