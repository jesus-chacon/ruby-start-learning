import React, { Component } from 'react';

class SignupPage extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            password: '',
            confPassword: '',
            errorPassword: false
        };
    }

    render() {
        return (<h1>Hello signup</h1>)
    }
}

export default SignupPage;