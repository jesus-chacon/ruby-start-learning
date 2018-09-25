import React, { Component } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { login, checkLogin } from "../../actions/users";

class LoginPage extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        const loginState = this.props.loginState;

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xs-10 col-sm-8 col-md-6 ">
                        <div className="card login-card">
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">

                                {
                                    !!loginState.hasError &&

                                    <div className="alert alert-danger" role="alert">
                                        The credentials are invalid
                                    </div>
                                }

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })} />
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })} />
                                </div>

                                <div className="form-group">
                                    <button className="btn btn-primary" onClick={this._login.bind(this)}>Login</button>
                                </div>

                                <Link to="/signup">I not have account yet</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.checkLogin(this.props.history);
    }

    _login() {
        const { email, password } = this.state;

        this.props.login(email, password, this.props.history);
    }
}

const mapStateToProps = ({ usersReducers }) => ({
    loginState: usersReducers.loginState
});

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(login, dispatch),
    checkLogin: bindActionCreators(checkLogin, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);