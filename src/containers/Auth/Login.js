import { push } from "connected-react-router";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  handleOnChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    console.log(
      "username: ",
      this.state.username,
      "password",
      this.state.password
    );
  };

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your username"
                value={this.state.username}
                onChange={(e) => this.handleOnChangeUsername(e)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <input
                type={this.state.isShowPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter your password"
                onChange={(e) => this.handleOnChangePassword(e)}
              />
              <span className="custom-input-password" onClick={() => this.handleShowHidePassword()}>
                <i class={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
              </span>
            </div>
            <div className="col-12">
              <button className="btn btn-primary btn-login" onClick={() => this.handleLogin()}>Login</button>
            </div>
            <div className="col-12">
              <span className="forgot-password">Forgot your password?</span>
            </div>
            <div className="col-12 text-center mt-3">
              <span className="text-other-login">Or Login With:</span>
            </div>
            <div className="col-12 social-login">
              <i className="fab fa-google-plus-g google"></i>
              <i className="fab fa-facebook-f facebook"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
