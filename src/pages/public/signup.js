import React, {Component} from "react";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {signup} from "../../actions/users";

class SignupPage extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
      confPassword: "",
      errorPassword: false,
      terms: false
    };
  }

  render() {
    return (
      <form className="container" onSubmit={this._signup.bind(this)}>
        <div className="row justify-content-center">
          <div className="col-xs-11 col-sm-10 col-md-6">
            <div className="card login-card">
              <h5 className="card-header">&Uacute;nete a Fudit</h5>

              <div className="card-body">
                <div className="md-form">
                  <label>Nombre*</label>
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}
                    required />
                </div>

                <div className="md-form">
                  <label>Correo electronico*</label>
                  <input
                    type="email"
                    className="form-control"
                    value={this.state.email}
                    onChange={e => this.setState({email: e.target.value})}
                    required />
                </div>

                <div className="md-form">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${this.state.errorPassword ? "is-invalid" : ""}`}
                    value={this.state.password}
                    onChange={e => this.setState({password: e.target.value})}
                    required />
                </div>

                <div className="md-form">
                  <label>Repetir contraseña</label>
                  <input
                    type="password"
                    className={`form-control ${this.state.errorPassword ? "is-invalid" : ""}`}
                    value={this.state.confPassword}
                    onChange={e => this.setState({confPassword: e.target.value})}
                    required />
                </div>

                <div className="form-check">
                  <input type="checkbox" onChange={e => this.setState({terms: e.target.checked})} className="form-check-input" required />
                  <label className="form-check-label">
                    Acepto los 
                    <a href="https://www.fudit.es/terminos/" target="black">terminos y condiciones</a>
                    de uso 
                  </label>
                </div>

                <div className="md-form">
                  <button className="btn btn-primary" disabled={!this.state.terms}>Entrar</button>
                </div>

                <Link to="/login">Ya tengo una cuenta</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }

  _signup(e) {
    e.preventDefault();

    const {email, password, confPassword, name} = this.state;

    if (password.trim().length === 0 || password !== confPassword) {
      this.setState({errorPassword: true});
    } else {
      this.props.signup({email, password, name}, this.props.history);
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: bindActionCreators(signup, dispatch)
});

export default connect(null, mapDispatchToProps)(SignupPage);