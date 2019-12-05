import React from "react";
import Auth from "../auth";
class AddFranchise extends React.Component {
  state = {
    name: "",
    email: "",
    buildingNo: "",
    town: "",
    city: "",
    country: "",
    zipcode: "",
    contact: "",
    counter: "",
    type: ""
  };
  componentDidMount() {}
  submitFranchiseDetails = e => {
    e.preventDefault();

    if (this.state.type === "select buisness type" || this.state.type === "") {
      alert("Select Buisness Type");
      return;
    }
    fetch("http://mysteryshopping.herokuapp.com/api/o/addbusiness", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Authorization: Auth.token,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        building: this.state.buildingNo,
        town: this.state.town,
        city: this.state.city,
        country: this.state.country,
        zipcode: parseInt(this.state.zipcode),
        phone: parseInt(this.state.contact),
        niche: this.state.type
      })
    })
      .then(function(res) {
        // console.log(res);
        return res.json();
      })
      .then(response => {
        console.log(Auth.token);
        console.log("response of server:");
        console.log(response);
        

        let count = 0;
        // for (let i = 0; i < Auth.branchResponse.length; i++) {
        //   count = i + 1;
        // }
        // count = count + 1;
        // Auth.branchCount = count;

        // this.setState({ counter: count });
      })
      .catch(function(res) {
        
        console.log(res);
      });
  };
  resetField = e => {
    this.setState({
      name: "",
      email: "",
      buildingNo: "",
      town: "",
      city: "",
      country: "",
      zipcode: "",
      contact: "",
      type: ""
    });
  };
  buisnessTypeHandler = e => {
    this.state.type = e.target.value;
  };
  formHandler = e => {
    // console.log(e.target.name);
    if (e.target.name === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    }

    if (e.target.name === "bNo") {
      this.setState({ buildingNo: e.target.value });
    }

    if (e.target.name === "town") {
      this.setState({ town: e.target.value });
    }
    if (e.target.name === "city") {
      this.setState({ city: e.target.value });
    }
    if (e.target.name === "country") {
      this.setState({ country: e.target.value });
    }
    if (e.target.name === "zipcode") {
      this.setState({ zipcode: e.target.value });
    }
    if (e.target.name === "contact") {
      this.setState({ contact: e.target.value });
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
                  <h5 className="title">Add Buisness</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitFranchiseDetails}>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Business's name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Business Name"
                            value={this.state.name}
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={this.formHandler}
                            value={this.state.email || ""}
                            placeholder="Email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <div className="box">
                            <label style={{ paddingRight: "2%" }}>
                              Buisness Type
                            </label>
                            <select onChange={this.buisnessTypeHandler}>
                              <option value="select buisness type">
                                Select buisness type
                              </option>
                              <option value="Health">Health</option>
                              <option value="Health">Food</option>
                              <option value="Health">Travel</option>
                              <option value="Health">Games</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <br />
                    <hr />
                    <h6 style={{ fontSize: "12px" }}>ADDRESS</h6>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Building Number</label>
                          <input
                            type="text"
                            name="bNo"
                            className="form-control"
                            placeholder="Building Number"
                            onChange={this.formHandler}
                            value={this.state.buildingNo}
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
                            onChange={this.formHandler}
                            placeholder="Town"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
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
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            className="form-control"
                            value={this.state.country}
                            placeholder="Country"
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>ZIP Code</label>
                          <input
                            type="number"
                            name="zipcode"
                            className="form-control"
                            placeholder="ZIP Code"
                            value={this.state.zipcode}
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Contact#</label>
                          <input
                            type="number"
                            name="contact"
                            className="form-control"
                            value={this.state.contact}
                            placeholder="contact"
                            onChange={this.formHandler}
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
      </React.Fragment>
    );
  }
}

export default AddFranchise;
