import React, { Component } from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";

// linear-gradient(185deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(255,127,0,0.8382703423166141) 100%)

class Sidemenu extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="sidebar" data-color="orange">
          <Logo />
          <div className="sidebar-wrapper" id="sidebar-wrapper">
            <ul className="nav">
              <li
                className={
                  this.props.callingComponent === "dashboard" ? "active" : ""
                }
              >
                <Link to="/dashboard">
                  {/* <a href="/dashboard"> */}
                  <i className="now-ui-icons design_app"></i>
                  <p style={{ color: "white" }}>Dashboard</p>
                  {/* </a> */}
                </Link>
              </li>

              <li
                className={
                  this.props.callingComponent === "userprofile" ? "active" : ""
                }
              >
                <Link to="/profile">
                  {/* <a href="/profile"> */}
                  <i className="now-ui-icons users_single-02"></i>
                  <p style={{ color: "white" }}>User Profile</p>
                  {/* </a> */}
                </Link>
              </li>
              <li
                className={
                  this.props.callingComponent === "addFranchise" ? "active" : ""
                }
              >
                <Link to="/addFranchise">
                  <i className="fa fa-building"></i>
                  <p style={{ color: "white" }}>Add Franhise</p>
                </Link>
              </li>

              <li
                className={
                  this.props.callingComponent === "addtask" ? "active" : ""
                }
              >
                <Link to="/addtask">
                  <i className="fa fa-plus"></i>
                  <p style={{ color: "white" }}>Add Task</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Sidemenu;
