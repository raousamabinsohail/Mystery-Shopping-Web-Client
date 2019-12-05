import React, { Component } from "react";
import "./App.css";
import Login from "./loginPage/Login";
import PrivateRoute from "./Route/PrivateRoute";
import UserProfilePage from "./Route/UserProfilePage";
// import DashboardPage from "./Route/DashboardPage";
import AddTaskPage from "./Route/AddTaskPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AddFranchisePage from "./Route/AddFranchisePage";
import asyncComponent from "./loginPage/Async";

const myDashboard = asyncComponent(() =>
  import("./Route/DashboardPage").then(module => module.default)
);

//import sideNav from "./Home/sideNav"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            {/* <Route exact path="/" component={Login} /> */}
            {/* <Route
              path="/logout"
              render={() => { 
                Auth.signout();
                return <Redirect to="/" />;
              }}  
            /> */}

            <PrivateRoute exact path="/dashboard" component={myDashboard} />
            <PrivateRoute path="/profile" component={UserProfilePage} />
            <PrivateRoute path="/addtask" component={AddTaskPage} />
            <PrivateRoute path="/addFranchise" component={AddFranchisePage} />

            {/* <Route path="/test" component={comp1} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
