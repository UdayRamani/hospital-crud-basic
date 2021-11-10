import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import TitleComponent from "./title";

export default class Login extends Component {
  state = {
    email: "",
    role: "Admin",
    hos: "",
    password: "",
    redirect: false,
    authError: false,
    isLoading: false,
    location: {},
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleRoleChange = (event) => {
    this.setState({ role: event.target.value });
  };
  handlehosChange = (event) => {
    this.setState({ hos: event.target.value });
  };
  handlePwdChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    console.log(this.state.role);
    console.log(this.state.hos);
    if (email === "hello123" && password === "12345") {
      this.setState({ redirect: true });
      localStorage.setItem("login", true);
      localStorage.setItem("role", this.state.role);

      //get them back
    }
  };

  renderRedirect = () => {
    var storeddata = JSON.parse(localStorage.getItem("login"));
    if (storeddata === true) {
      return <Redirect to="/dashboard" />;
    }
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    return (
      <div className="container">
        {/* <TitleComponent title="React CRUD Login "></TitleComponent>  */}
        <div className="card card-login mx-auto mt-5">
          <div className="card-header">Login</div>
          <div className="text-center">
            {/* <span>IP : <b>{this.state.location.ip}</b></span>, &nbsp;
                        <span>Country : <b>{this.state.location.country_name}</b></span>, &nbsp;
                        <span>Region : <b>{this.state.location.region_name}</b></span>, &nbsp;
                        <span>City : <b>{this.state.location.city}</b></span>, &nbsp;
                        <span>PIN : <b>{this.state.location.zip_code}</b></span>, &nbsp;
                        <span>Zone : <b>{this.state.location.time_zone}</b></span> */}
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                {/* <div className="form-label-group">
                  <input
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="inputEmail"
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={this.handleEmailChange}
                    autoFocus
                    required
                  />
                  <label htmlFor="inputEmail">Email address</label>
                  <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                </div> */}
                <div className="form-group">
                  <div className="form-row">
                    <div className="col-md-6">
                      <select
                        name="role"
                        id="role"
                        onChange={this.handleRoleChange}
                      >
                        <option value="Admin">Admin</option>
                        <option value="Doctor">Doctor</option>
                        <option value="Patient">Patient</option>
                      </select>
                    </div>
                    <div className="col-md-6" onChange={this.handlehosChange}>
                      <select name="hospital" id="hospital">
                        <option value="Hospital1">Hospital 1</option>
                        <option value="Hospital2">Hospital 2</option>
                        <option value="Hospital3">Hospital 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="inputEmail"
                    placeholder="Email address"
                    type="text"
                    name="email"
                    onChange={this.handleEmailChange}
                    autoFocus
                    required
                  />
                  <label htmlFor="inputEmail">Email address</label>
                  <div className="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input
                    type="password"
                    className={
                      "form-control " +
                      (this.state.authError ? "is-invalid" : "")
                    }
                    id="inputPassword"
                    placeholder="******"
                    name="password"
                    onChange={this.handlePwdChange}
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                  <div className="invalid-feedback">
                    Please provide a valid Password.
                  </div>
                </div>
              </div>
              {/* <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input type="checkbox" value="remember-me"/>Remember Password
                                    </label>
                                </div>
                            </div> */}
              <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">
                  Login &nbsp;&nbsp;&nbsp;
                </button>
              </div>
              {/* <div className="form-group">
                                <div className="form-group">
                                    <b>email:</b> gowthaman.nkl1@gmail.com
                                </div>
                                <div className="form-group">
                                    <b>password :</b> password
                                </div>
                            </div> */}
            </form>
            {/* <div className="text-center">
                            <Link className="d-block small mt-3" to={'register'}>Register an Account</Link>
                            <a className="d-block small" href="forgot-password.html">Forgot Password?</a>
                        </div> */}
          </div>
        </div>
        {this.renderRedirect()}
      </div>
    );
  }
}
