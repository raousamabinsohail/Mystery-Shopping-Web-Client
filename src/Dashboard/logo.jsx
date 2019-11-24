import React, { Component } from "react";

class Logo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="logo">
          <a href="#ad" className="simple-text logo-mini">
            MS
          </a>
          <a href="#abc" className="simple-text logo-normal">
            MYsTery ShOP
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Logo;
