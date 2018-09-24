import React, { Component } from "react";

import { AUTH_TOKEN } from "../../constants";

class LoginPage extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (<h1>Hello world</h1>);
    }
}

export default LoginPage;