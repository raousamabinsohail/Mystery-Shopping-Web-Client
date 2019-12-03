import React from "react";
import Navbar from "./navbar";
import Sidemenu from "./sidemenu";
import Auth from "../auth";
class Dashboard extends React.Component {
  state = {
    branchCount: 0
  };
  // https://mysteryshopper1.azurewebsites.net/api/r/getallbranches
  componentDidMount() {
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/getallbranches", {
      method: "GET",
      credentials: "same-origin",
      Authorization: "",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthYmFiamVlc0BnbWFpbC5jb20iLCJyb2xlIjoiUmVzdGF1cmFudCIsIm5iZiI6MTU3NTI3NjAwMiwiZXhwIjoxNTc3ODY4MDAyLCJpYXQiOjE1NzUyNzYwMDJ9.sJB6YyppbuR5LBSlELfLrihu5YBRq23nSXbwEObRe5U"
      }
    })
      .then(function(res) {
        return res.json();
      })
      // string 253   int 3   float 4
      .then(response => {
        // this.fetchDataInStoreData(response); // this funtion to print fetch data in table
        console.log("xxxddd");
        console.log(response);
        let count = 0;
        for (let i = 0; i < response.length; i++) {
          count = i + 1;
        }
        this.setState({ branchCount: count });
        Auth.branchCount = count;
        Auth.branchResponse = response;
      })
      .catch(function(res) {
        console.log(res);
      });
  }
  render() {
    return (
      <React.Fragment>
        {/* <body className=""> */}
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="card card-chart">
                <div className="card-header">
                  <h5 className="card-category">Franchise</h5>
                  <h4 className="card-title">Total Franchises</h4>
                </div>
                <div className="card-body">
                  <div className="chart-area">
                    <h1>{this.state.branchCount}</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="card card-chart">
                <div className="card-header"></div>
                <div className="card-body">
                  <div className="chart-area">
                    <canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
                  </div>
                </div>
                <div className="card-footer"></div>
              </div>
            </div> */}
          </div>
          {/* sadasdsa */}
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
