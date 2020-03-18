import React, { useContext } from 'react';
import AlertContext          from '../../context/alert/alertContext';

const Alert = () => {
    const alertContext = useContext( AlertContext );

    const alert = alertContext.alert;

    return (
        alert !== null && (
            <div className = { `alert alert-${ alert.type }` }>
                <i className = { 'fas- fa-icon-circle' } /> { alert.msg }
            </div>
        )
    );
};

export default Alert;