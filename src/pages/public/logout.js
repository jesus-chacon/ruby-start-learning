import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class LogoutPage extends Component {
    constructor() {
        super();

        this.state = {};
    }

    render() {
        return (<Redirect to={{
            pathname: "/login", state: { from: "logout" }
        }} />);
    }

    componentDidMount() {
        localStorage.clear();
    }
}

export default LogoutPage;