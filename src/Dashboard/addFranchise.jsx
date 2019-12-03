import React from "react";
import Auth from "../auth";
class AddFranchise extends React.Component {
  state = {
    orgName: "",
    email: "",
    franchiseName: "",
    contact: "",
    address: [],
    contact: "",
    city: "",
    country: "",
    franciseId: "",
    counter: "",
    street: "",
    town: ""
  };
  componentDidMount() {
    let res = Auth.response;
    console.log("here authentication is");
    console.log(Auth.branchCount);
    this.setState({
      orgName: res.Name,
      email: res.Email,
      counter: Auth.branchCount
    });
  }
  submitFranchiseDetails = e => {
    e.preventDefault();
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/branchsignup", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthYmFiamVlc0BnbWFpbC5jb20iLCJyb2xlIjoiUmVzdGF1cmFudCIsIm5iZiI6MTU3NTI3NjAwMiwiZXhwIjoxNTc3ODY4MDAyLCJpYXQiOjE1NzUyNzYwMDJ9.sJB6YyppbuR5LBSlELfLrihu5YBRq23nSXbwEObRe5U",

        // accept: "application/json",
        Accept: "application/json",
        "Content-Type": "application/json"
        // "Access-Control-Allow-Origin": "https://javascript.info
      },
      body: JSON.stringify({
        name: this.state.franchiseName,
        city: this.state.city,
        country: this.state.country,
        street: this.state.street,
        town: this.state.town,
        phone: this.state.contact
      })
    })
      .then(function(res) {
        // console.log(res);
        return res.json();
      })
      .then(response => {
        console.log("response of server:");
        console.log(response);
        let count = 0;
        for (let i = 0; i < Auth.branchResponse.length; i++) {
          count = i + 1;
        }
        count = count + 1;
        Auth.branchCount = count;

        this.setState({ counter: count });
      })
      .catch(function(res) {
        console.log(res);
      });
  };
  resetField = e => {
    this.setState({
      franchiseName: "",
      city: "",
      contact: "",
      street: "",
      town: ""
    });
  };
  formHandler = e => {
    // console.log(e.target.name);
    if (e.target.name === "street") {
      this.setState({ street: e.target.value });
    }
    if (e.target.name === "town") {
      this.setState({ town: e.target.value });
    }

    if (e.target.name === "franchiseName") {
      this.setState({ franchiseName: e.target.value });
    }

    if (e.target.name === "address") {
      this.setState({ address: e.target.value });
    }
    if (e.target.name === "contact") {
      this.setState({ contact: e.target.value });
    }
    if (e.target.name === "city") {
      this.setState({ city: e.target.value });
    }
    if (e.target.name === "country") {
      this.setState({ country: e.target.value });
    }
  };
  addBranchInList() {}
  render() {
    return (
      <React.Fragment>
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="title">Add Franchise</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitFranchiseDetails}>
                    <div className="row">
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label>Organization's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="organizationName"
                            placeholder="Organization Name"
                            defaultValue={this.state.orgName}
                            disabled
                            // onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      {/* <div className="col-md-3 px-1">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            defaultValue="michael23"
                          />
                        </div>
                      </div> */}
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label id="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            defaultValue={this.state.email}
                            disabled
                            // onChange={this.formHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <form></form>
                    <div className="row">
                      <div className="col-md-12 pr-1">
                        <div className="form-group">
                          <label>Francise Name</label>
                          <input
                            type="text"
                            name="franchiseName"
                            className="form-control"
                            placeholder="Company"
                            value={this.state.franchiseName}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Street</label>
                          <input
                            type="text"
                            name="street"
                            className="form-control"
                            placeholder="Street"
                            value={this.state.street}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Town</label>
                          <input
                            type="text"
                            name="town"
                            className="form-control"
                            value={this.state.town}
                            placeholder="town"
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>Contact#</label>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            placeholder="contact#"
                            value={this.state.contact}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            className="form-control"
                            placeholder="Country"
                            value={this.state.country}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button
                            className="customBtn"
                            type="submit"
                            style={{
                              marginLeft: "38%",
                              width: "20%",
                              marginTop: "2%"
                            }}
                            // onClick={this.submitFranchiseDetails}
                          >
                            Add Franchise
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button
                            className="customBtn"
                            type="button"
                            onClick={this.resetField}
                            style={{
                              marginLeft: "40%",
                              width: "15%",
                              marginTop: "2%"
                            }}
                          >
                            Reset
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-body">
                  <p className="description text-center"></p>

                  <div className="column_counter">
                    <div className="card_counter">
                      <p>
                        <i
                          className="fa fa-building"
                          style={{ fontSize: "45px", color: "white" }}
                        ></i>
                      </p>
                      <br />
                      <h3>{this.state.counter}</h3>
                      <br />
                      No of Franchises
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav>
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Mystery Shop</a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">About Us</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default AddFranchise;
