import React from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";
import Auth from "../auth";
class Userprofile extends React.Component {
  state = {
    companyName: "",
    email: "",
    name: "",
    address: "",
    phone: ""
  };
  componentDidMount() {
    console.log(Auth.response);
    let res = Auth.response;
    console.log(res.email);
    this.setState({
      name: res.Name,
      email: res.Email,
      address: res.Address,
      phone: res.PhoneNumber
    });
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
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label>Company Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            value={this.state.companyName}
                            readOnly
                          />
                        </div>
                      </div>

                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label id="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            value={this.state.email}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            defaultValue={this.state.name}
                            readOnly
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
                            className="form-control"
                            placeholder="Home Address"
                            defaultValue={this.state.address}
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            defaultValue={this.state.phone}
                            readOnly
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            // placeholder="Country"
                            value="Pakistan"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
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
