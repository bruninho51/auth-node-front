import React from 'react';
import Auth from '../api/auth';
import { Redirect } from 'react-router-dom';

export default class Principal extends React.Component {
    constructor(props) {
        super(props);

        this.component = this.component.bind(this);
    }

    component() {
        return (
            <div>
                <h1>Principal</h1>
            </div>
        );
    }

    render() {
        return (
            Auth.isAuthenticate() &&
            this.component() ||
            <Redirect to='/login' />
        );
    }
}