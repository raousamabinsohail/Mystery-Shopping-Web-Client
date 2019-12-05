import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from "../auth";

class PrivateRoute extends React.Component {
  state = {
    loaded: false,
    isAuthenticated: true
  };
  // authenticate(cb) {
  //   let isAuthenticated = Auth.isAuthenticated;
  //   setTimeout(cb, 100); // fake async
  // }
  componentDidMount() {
    // Auth.isAuthenticated = true;
    console.log("reloading pr ", Auth.isAuthenticated);
  }
  render() {
    // const fakeAuth = {
    //   isAuthenticated: false,

    //   authenticate(cb) {
    //     fakeAuth.isAuthenticated = Auth.isAuthenticated;
    //     console.log(fakeAuth.isAuthenticated);
    //     setTimeout(cb, 100); // fake async
    //   },
    //   signout(cb) {
    //     fakeAuth.isAuthenticated = false;
    //     setTimeout(cb, 100);
    //   }
    // };
    console.log(this.authenticate);
    const { component: Component, ...rest } = this.props;
    // const { loaded, isAuthenticated } = this.state;
    // if (!loaded) return null;
    return (
      <Route
        {...rest}
        render={props => {
          // console.log("page reload  ", Auth.isAuthenticated);
          Auth.isAuthenticated = true;
          return Auth.isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          );
        }}
      />
    );
  }
}

export default PrivateRoute;
