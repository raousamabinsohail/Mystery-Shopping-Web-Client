
import React  from "react";
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

class Login extends React.Component{
  state = {
    email: "",
    password : "",
  };
 

  handleCredentialPostRequest() {
    fetch('https://discountz-hub.herokuapp.com/auth/login', {
      // mode: "no-cors",
      method: 'POST',
      credentials: 'include',
      headers: {
        'accept':'application/json','content-type': 'application/json',
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
        console.log("asdasdasdgyu yes asfdashdh")
        console.log(response);
        if (response.authenticate === 'true') {
          // this.props.history.push('/dashboard');
            console.log("authenticate")
          ///LOAD HOME PAGE
        } else if (response.authenticate === 'false') {
          console.log(response.message);
          // this.setState({ emailError: true, passwordError: true });
        } else {
          console.log('Serious Error');
        }
      })
      .catch(function(res) {
        console.log(res);
      });
    console.log('request sent');
  }

  passwordHandler=e=>{
    this.setState({password:e.target.value})
  } 
  emailHandler=e=>{
    this.setState({email: e.target.value})
  }
  onSubmitForm(e){

    e.preventDefault();
    console.log(this.state.email)
    console.log(this.state.password)
     this.handleCredentialPostRequest() 
  }
render(){

  
  
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
                </h3>
              </MDBCardHeader>
              <form onSubmit={this.onSubmitForm.bind(this)}>
                <div className="grey-text">
                  <MDBInput
                    onChange={this.emailHandler}
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    // validate
                    error="wrong"
                    success="right"
                    // required
                  />
                  <MDBInput
                    onChange={this.passwordHandler}
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    // required
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Login
                </MDBBtn>
              </div>
        
              </form>

              <MDBModalFooter>
                <div className="font-weight-light">
                  <p>Not a member? Sign Up</p>
                  <p>Forgot Password?</p>
                </div>
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
  }
  }
  
export default Login;