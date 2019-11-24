import React, { Component } from "react";
import $ from "jquery";
// import Auth from "../../../Auth";
// import { Helmet } from "react-helmet";

class ComboBox extends Component {
  state = {
    tableNames: [],
    selectName: "Table Name"
  };

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
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default ComboBox;
