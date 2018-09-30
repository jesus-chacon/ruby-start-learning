import React, { Component } from "react";
import { Link } from "react-router-dom";

import { AUTH_TOKEN } from "../constants";

class Navbar extends Component {
    render() {
        const token = localStorage.getItem(AUTH_TOKEN);

        if (!token) {
            return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src="../../src/assets/fudit-logo-full-inverso.png" alt=""></img>
                    </Link>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/Fudit_/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-2x fa-instagram"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/fuditcompany/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-2x fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            );
        } else {
            return (
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className="navbar-brand" to="/">
                        <img src="../../src/assets/fudit-logo-full-inverso.png" alt=""></img>
                    </Link>

                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.instagram.com/Fudit_/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-2x fa-instagram"></i>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="https://www.facebook.com/fuditcompany/" target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-2x fa-facebook-square"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            );
        }
    }
}

export default Navbar;