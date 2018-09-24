import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to="/">
                    <img src="../../src/assets/fudit-logo-full.png" height="30" alt=""></img>
                </Link>
            </nav>
        );
    }
}

export default Navbar;