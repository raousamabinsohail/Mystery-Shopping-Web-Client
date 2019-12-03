import React, { Component } from "react";
import $ from "jquery";
import Auth from "../auth";
// import { Helmet } from "react-helmet";

class ComboBox extends Component {
  state = {
    tableNames: [],
    selectName: "Table Name",
    address: []
  };
  componentDidMount() {
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/getallbranches", {
      method: "GET",
      credentials: "same-origin",
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
        let addr = [];
        let count = 0;
        for (let i = 0; i < response.length; i++) {
          let address =
            String(response[i].Street) +
            "," +
            String(response[i].Town) +
            "," +
            String(response[i].City);

          console.log("iteration#", i, " ", address);

          addr.push(address);

          address = "";
        }
        this.setState({ address: addr });
      })
      .catch(function(res) {
        console.log(res);
      });
  }
  selectTable = evt => {
    console.log("table name is  " + evt.target.value);
  };
  selectHandler = evt => {
    console.log("taeger   " + evt.target.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="box">
          <select>
            {this.state.address.map((address, index) => {
              console.log(address);

              return (
                <option key={index} value={address}>
                  {address}
                </option>
              );
            })}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default ComboBox;
