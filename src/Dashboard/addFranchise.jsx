import React from "react";
class AddFranchise extends React.Component {
  state = {
    orgName: "",
    email: "",
    franchiseName: "",
    contact: "",
    address: [],
    province: "",
    city: "",
    country: "",
    franciseId: ""
  };
  formHandler = e => {
    console.log(e.target.name);
    if (e.target.name === "organizationName") {
      this.setState({ orgName: e.target.value });
    }

    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.name === "franchiseName") {
      this.setState({ franchiseName: e.target.value });
    }
    if (e.target.name === "contact") {
      this.setState({ contact: e.target.value });
    }
    if (e.target.name === "address") {
      this.setState({ address: e.target.value });
    }
    if (e.target.name === "province") {
      this.setState({ province: e.target.value });
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
                  <form>
                    <div className="row">
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label>Organization's Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="organizationName"
                            placeholder="Organization Name"
                            onChange={this.formHandler}
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
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Francise Name</label>
                          <input
                            type="text"
                            name="franchiseName"
                            className="form-control"
                            placeholder="Company"
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Contact#</label>
                          <input
                            type="text"
                            name="contact"
                            className="form-control"
                            placeholder="Contact"
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Franchise Address"
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>Province</label>
                          <input
                            type="text"
                            name="province"
                            className="form-control"
                            placeholder="province"
                            onChange={this.formHandler}
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
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="number"
                            name="country"
                            className="form-control"
                            placeholder="Country"
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button className="customBtn" type="submit">
                            Add Franchise
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
                      <h3>11+</h3>
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
