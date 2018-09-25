import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { signup } from "../../actions/users";

class SignupPage extends Component {
    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            password: "",
            confPassword: "",
            errorPassword: false
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-10 col-sm-8 col-md-6">
                        <div className="card login-card">
                            <h5 className="card-header">Login</h5>

                            <div className="card-body">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.name}
                                        onChange={e => this.setState({ name: e.target.value })}
                                        required />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                        required />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${this.state.errorPassword ? "is-invalid" : ""}`}
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                        required />
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${this.state.errorPassword ? "is-invalid" : ""}`}
                                        value={this.state.confPassword}
                                        onChange={e => this.setState({ confPassword: e.target.value })}
                                        required />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={this._signup.bind(this)}>Signup</button>
                                </div>

                                <Link to="/login">I have account</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    _signup() {
        const { email, password, confPassword } = this.state;

        if (password.trim().length === 0 || password !== confPassword) {
            this.setState({ errorPassword: true });
        } else {
            this.props.signup({ email, password }, this.props.history);
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    signup: bindActionCreators(signup, dispatch)
});

export default connect(null, mapDispatchToProps)(SignupPage);