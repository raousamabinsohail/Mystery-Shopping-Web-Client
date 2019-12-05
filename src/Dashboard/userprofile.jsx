import React from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";
import Auth from "../auth";
class Userprofile extends React.Component {
  state = {
    orgName: "",
    email: "",
    buildingNo: "",
    town: "",
    city: "",
    country: "",
    zipcode: "",
    contact: ""
  };
  componentDidMount() {
    let res = Auth.response;
    // console.log("city here");
    if (res) {
      console.log(res.officeAddress.city);

      this.setState({
        orgName: res.name,
        email: res.email,
        buildingNo: res.officeAddress.building,
        town: res.officeAddress.town,
        city: res.officeAddress.city,
        country: res.officeAddress.country,
        zipcode: res.officeAddress.zipcode,
        contact: res.phone
      });
    }

    // console.log(res["officeAddress"]["building"]);
  }
  render() {
    return (
      <React.Fragment>
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="title"> Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Organization's name</label>
                          <input
                            type="text"
                            name="orgName"
                            className="form-control"
                            placeholder="Organization Name"
                            defaultValue={this.state.orgName}
                            disabled
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
                            defaultValue={this.state.email}
                            placeholder="Email"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
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
                            defaultValue={this.state.buildingNo}
                            disabled
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
                            defaultValue={this.state.town}
                            placeholder="Town"
                            disabled
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
                            defaultValue={this.state.city}
                            disabled
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
                            defaultValue={this.state.country}
                            placeholder="Country"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>ZIP Code</label>
                          <input
                            type="text"
                            name="zipcode"
                            className="form-control"
                            placeholder="ZIP Code"
                            defaultValue={this.state.zipcode}
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Contact#</label>
                          <input
                            type="number"
                            name="Contact"
                            className="form-control"
                            defaultValue={this.state.contact}
                            placeholder="contact"
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    {/* <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Home Address"
                            defaultValue={this.state.address}
                            readOnly
                          />
                        </div>
                      </div>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Userprofile;
