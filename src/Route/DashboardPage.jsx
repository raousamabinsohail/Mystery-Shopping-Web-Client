import React, { Component } from "react";
import Sidemenu from "../Dashboard/sidemenu";
import Navbar from "../Dashboard/navbar";
import Dashboard from "../Dashboard/dashboard";

class DashboardPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrapper ">
          {/* Call logo component there */}

          {/* call side menu component there */}
          <Sidemenu callingComponent="dashboard"/>
          <div className="main-panel" id="main-panel">
            {/* Navbar */}
            <Navbar />
            {/* Call navbar component there */}
            {/* End Navbar */}
            <div className="panel-header panel-header-lg">
              <canvas id="bigDashboardChart"></canvas>
            </div>
            <Dashboard />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DashboardPage;
