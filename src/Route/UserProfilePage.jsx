import React, { Component } from "react";
import Userprofile from "../Dashboard/userprofile";
import Navbar from "../Dashboard/navbar";
import Sidemenu from "../Dashboard/sidemenu";
import Logo from "../Dashboard/logo";

class UserProfilePage extends Component {
  state = {};
  render() {
    return (
      <div className="user-profile">
        <div className="wrapper ">
          {/* side menu bar */}
          <Sidemenu callingComponent="userprofile" />
          <div className="main-panel" id="main-panel">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- End Navbar --> */}
            <Userprofile />
          </div>
        </div>
        {/* <!--   Core JS Files   --> */}
        <script src="js/core/jquery.min.js"></script>
        <script src="js/core/popper.min.js"></script>
        <script src="js/core/bootstrap.min.js"></script>
        <script src="js/plugins/perfect-scrollbar.jquery.min.js"></script>

        {/* <!-- Chart JS --> */}
        <script src=".js/plugins/chartjs.min.js"></script>
        {/* <!--  Notifications Plugin    --> */}
        <script src="js/plugins/bootstrap-notify.js"></script>
        {/* <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc --> */}
        <script
          src="js/now-ui-dashboard.min.js?v=1.3.0"
          type="text/javascript"
        ></script>
        {/* <!-- Now Ui Dashboard DEMO methods, don't include it in your project! --> */}
        <script src="demo/demo.js"></script>
      </div>
    );
  }
}

export default UserProfilePage;
