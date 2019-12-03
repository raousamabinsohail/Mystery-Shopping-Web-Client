import React from "react";
import Auth from "../auth";
import { Link, withRouter, Redirect } from "react-router-dom";
import { browserHistory } from "react-router";
// var cors = require('cors');
// var express = require('express')
// var router = express.Router()

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
 
  // https://mysteryshopper1.azurewebsites.net/api/r/getallbranches
  handleCredentialPostRequest() {
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        // accept: "application/json",
        Accept: "application/json",
        "Content-Type": "application/json"
        // "Access-Control-Allow-Origin": "https://javascript.info"
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(function(res) {
        // console.log(res);
        return res.json();
      })
      .then(response => {
        console.log("response of server:");
        console.log(response);
        if (response === "No restaurant found!") {
          // console.log(" not authenticate");
          alert("Invalid password or email");
          Auth.isAuthenticated = false;
        } else {
          console.log("server authentication");
          Auth.isAuthenticated = true;
          // Auth.isLoaded = true;
          Auth.response = response;
          this.props.history.push("/dashboard");
        }
      })
      .catch(function(res) {
        console.log(res);
      });
  }

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  onSubmitForm = e => {
    e.preventDefault();
    console.log("email =>", this.state.email);
    console.log(this.state.password);
    this.props.history.push("/dashboard");
    this.handleCredentialPostRequest();
  };
  render() {
    var bachiImage = "images/bachi2.jpg";
    return (
      <React.Fragment>
        <div
          className="row"
          style={{
            maxWidth: "100%"
            // maxHeight: "80%"
            // maxHeight: "100vh"
          }}
        >
          <div
            className="column"
            style={
              {
                // maxHeight: "80%"
                // height: "100%"
              }
            }
          >
            <div
              className="limiter"
              style={{
                // maxHeight: "80%"
                height: "80%"
              }}
            >
              <div className="container-login100" style={{ maxHeight: "100%" }}>
                <div
                  className="wrap-login100 p-t-190 p-b-30"
                  style={{ maxHeight: "100%" }}
                >
                  <form
                    className="login100-form validate-form"
                    onSubmit={this.onSubmitForm}
                  >
                    <h1
                      style={{
                        marginLeft: "12.5%",
                        fontFamily: "Comic Sans MS"
                      }}
                    >
                      Mystery Shopping
                    </h1>
                    <div className="logo">
                      <img
                        src="images/logo.gif"
                        style={{
                          width: "30%",
                          height: "65%",
                          marginLeft: "37%"
                        }}
                      />
                    </div>

                    {/* <span className="login100-form-title p-t-20 p-b-45">
                      John Doe
                    </span> */}

                    <div
                      className="wrap-input100 validate-input m-b-10"
                      data-validate="Username is required"
                    >
                      <input
                        className="input100"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={this.emailHandler}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-user"></i>
                      </span>
                    </div>

                    <div
                      className="wrap-input100 validate-input m-b-10"
                      data-validate="Password is required"
                    >
                      <input
                        className="input100"
                        type="password"
                        name="pass"
                        placeholder="Password"
                        onChange={this.passwordHandler}
                      />
                      <span className="focus-input100"></span>
                      <span className="symbol-input100">
                        <i className="fa fa-lock"></i>
                      </span>
                    </div>

                    <div className="container-login100-form-btn p-t-10">
                      <button className="login100-form-btn">Login</button>
                    </div>

                    {/* <div className="text-center w-full p-t-25 p-b-230">
                      <a href="#" className="txt1">
                        Forgot Username / Password?
                      </a>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            className="column"
            style={{
              backgroundImage: "url(" + bachiImage + ")",
              maxHeight: "100%",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div>
              <h1
                style={{
                  paddingRight: "20%",
                  paddingTop: "30%",
                  // paddingLeft: ,
                  fontFamily: "Charcoal",
                  fontSize: "35px",
                  fontWeight: "bold"
                }}
              >
                Welcome to Mystery Shopping
              </h1>
              <h2
                style={{
                  paddingLeft: "8.5%",
                  fontFamily: "Charcoal",
                  fontSize: "22px",
                  fontStyle: "italic"
                  // fontWeight:
                }}
              >
                Vendor Portal
              </h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
