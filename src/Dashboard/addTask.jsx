import React from "react";
import ComboBox from "../Dashboard/combobox";
class AddTask extends React.Component {
  state = {
    questions: []
  };
  render() {
    return (
      <React.Fragment>
        {/* Side menu */}

        {/* End Nave Bar */}
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label
                            style={{
                              fontSize: "14px",
                              paddingBottom: "5%",
                              color: "black"
                            }}
                          >
                            Franchise's Name
                          </label>

                          <div style={{ paddingTop: "10%" }}>
                            <ComboBox />
                          </div>
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
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label style={{ color: "black" }}>Publish Date</label>

                          <input
                            type="date"
                            name="franchiseName"
                            className="form-control"
                            placeholder="Company"
                            onChange={this.formHandler}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label style={{ color: "black" }}>End Date</label>
                          <input
                            type="date"
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
                          <label style={{ color: "black" }}>Title</label>
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <label style={{ color: "black" }}>Description</label>
                          <textarea
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Write Description there!"
                            onChange={this.formHandler}
                            style={{ height: "100px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          
                          <label style={{ color: "black" }}>Publish Date</label>
                          <input
                            type="date"
                            name="franchiseName"
                            className="form-control"
                            placeholder="Company"
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTask;
