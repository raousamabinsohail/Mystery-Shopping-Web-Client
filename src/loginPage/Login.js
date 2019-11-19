import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";
// var cors = require('cors');
// var express = require('express')
// var router = express.Router()

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleCredentialPostRequest() {
    fetch("https://discountz-hub.herokuapp.com/auth/login", {
      // mode: "no-cors",
      method: "POST",
      credentials: "include",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
        // "Access-Control-Allow-Origin":"*",
      },
      body: JSON.stringify({
        // name: "asdsa",
        email: "asjkdhsa@gmail.com",
        password: "password"
      })
    })
      .then(function(res) {
        return res.json();
      })
      .then(response => {
        console.log("asdasdasdgyu yes asfdashdh");
        console.log(response);
        if (response.authenticate === "true") {
          // this.props.history.push('/dashboard');
          console.log("authenticate");
          ///LOAD HOME PAGE
        } else if (response.authenticate === "false") {
          console.log(response.message);
          // this.setState({ emailError: true, passwordError: true });
        } else {
          console.log("Serious Error");
        }
      })
      .catch(function(res) {
        console.log(res);
      });
    console.log("request sent");
  }

  passwordHandler = e => {
    this.setState({ password: e.target.value });
  };
  emailHandler = e => {
    this.setState({ email: e.target.value });
  };
  onSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    this.handleCredentialPostRequest();
  }
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
                  <form className="login100-form validate-form">
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
                  paddingTop: "30%",
                  paddingLeft: "8%",
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
