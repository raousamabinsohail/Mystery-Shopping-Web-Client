import React from "react";
import Sidemenu from "./sidemenu";
import Navbar from "./navbar";
class Userprofile extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
            <div className="col-md-8">
              <div className="card">
                <div className="card-header">
                  <h5 className="title">Edit Profile</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-5 pr-1">
                        <div className="form-group">
                          <label>Company (disabled)</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            defaultValue="Creative Code Inc."
                          />
                        </div>
                      </div>
                      <div className="col-md-3 px-1">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            defaultValue="michael23"
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
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company"
                            defaultValue="Mike"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            defaultValue="Andrew"
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
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4 pr-1">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            defaultValue="Mike"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 px-1">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Country"
                            defaultValue="Andrew"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 pl-1">
                        <div className="form-group">
                          <label>Postal Code</label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="ZIP Code"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>About Me</label>
                          <textarea
                            rows="4"
                            cols="80"
                            className="form-control"
                            placeholder="Here can be your description"
                            defaultValue="  Lamborghini Mercy, Your chick she so thirsty,
                                  I'm in that two seat Lambo."
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-user">
                <div className="image">
                  <img src="../assets/img/bg5.jpg" alt="..." />
                </div>
                <div className="card-body">
                  <div className="author">
                    <a href="#">
                      <img
                        className="avatar border-gray"
                        src="../assets/img/mike.jpg"
                        alt="..."
                      />
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">michael24</p>
                  </div>
                  <p className="description text-center">
                    "Lamborghini Mercy
                    <br /> Your chick she so thirsty
                    <br /> I'm in that two seat Lambo"
                  </p>
                </div>
                <hr />
                <div className="button-container">
                  <button
                    href="#"
                    className="btn btn-neutral btn-icon btn-round btn-lg"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    href="#"
                    className="btn btn-neutral btn-icon btn-round btn-lg"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    href="#"
                    className="btn btn-neutral btn-icon btn-round btn-lg"
                  >
                    <i className="fab fa-google-plus-g"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">
            <nav>
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">Creative Tim</a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">About Us</a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="copyright" id="copyright">
              &copy;
              <script>
                document.getElementById('copyright').appendChild(document.createTextNode(new
                Date().getFullYear()))
              </script>
              , Designed by
              <a href="https://www.invisionapp.com" target="_blank">
                Invision
              </a>
              . Coded by
              <a href="https://www.creative-tim.com" target="_blank">
                Creative Tim
              </a>
              .
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Userprofile;
