import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { AUTH_TOKEN } from "../constants";

class PrivateRoute extends Component {
    render() {
        const route = window.location.pathname;
        const token = localStorage.getItem(AUTH_TOKEN);

        if (!token) {
            if (route != "/login" && route != "/signup") {
                return (<Redirect to={{
                    pathname: "/login", state: { from: route }
                }} />);
            } else {
                return (<div></div>);
            }
        } else {
            return (<Route {...this.props} />);
        }
    }
}

export default PrivateRoute;