import React, { Component } from "react";
import "./App.css";
import Login from "./loginPage/Login";
import PrivateRoute from "./Route/PrivateRoute";
import UserProfilePage from "./Route/UserProfilePage";
import DashboardPage from "./Route/DashboardPage";
import AddTaskPage from "./Route/AddTaskPage";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import AddFranchisePage from "./Route/AddFranchisePage";

//import sideNav from "./Home/sideNav"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            {/* <Route
              path="/logout"
              render={() => { 
                Auth.signout();
                return <Redirect to="/" />;
              }}
            /> */}
            <PrivateRoute path="/dashboard" component={DashboardPage} />
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
