import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class Search extends Component {
    state = {
        text : '',
    };

    onChange = ( e ) => {
        this.setState( { text : e.target.value } );
    };

    onSubmit = ( e ) => {
        e.preventDefault();

        if (this.state.text === '') {
            this.props.setAlert( 'Please enter something', 'light' );
        } else {
            this.props.searchUsers( this.state.text );
            this.setState( { text : '' } );
        }
    };

    render() {
        return (
            <div>
                <form
                    className = { 'form' }
                    onSubmit = { this.onSubmit }
                >
                    <input
                        type = { 'text' }
                        name = { 'text' }
                        placeholder = { 'Search users...' }
                        value = { this.state.text }
                        onChange = { this.onChange }
                    />
                    <input
                        type = { 'submit' }
                        value = { 'Search' }
                        className = { 'btn btn-dark btn-block' }
                    />

                </form>
                {

                    <button
                        className = { 'btn btn-light btn-block' }
                        onClick = { this.props.clearUsers }
                    >
                        Clear
                    </button>
                }
            </div>
        );
    }
}

Search.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    setAlert : PropTypes.func.isRequired
};

export default Search;