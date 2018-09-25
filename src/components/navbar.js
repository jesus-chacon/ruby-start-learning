import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AUTH_TOKEN } from "../constants";

class Navbar extends Component {
    render() {
        const token = localStorage.getItem(AUTH_TOKEN);

        if (!token) {
            return (<div></div>);
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src="../../src/assets/fudit-logo-full.png" height="30" alt=""></img>
                    </Link>
                </nav>
            );
        }
    }
}

export default Navbar;