import React from "react";
import AddTask from "../Dashboard/addTask";
import Sidemenu from "../Dashboard/sidemenu";
import Navbar from "../Dashboard/navbar";

class AddTaskPage extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="wrapper ">
          {/* Call logo component there */}

          {/* call side menu component there */}
          <Sidemenu callingComponent="addtask" />
          <div className="main-panel" id="main-panel">
            {/* Navbar */}
            <Navbar />
            <AddTask />
            {/* Call navbar component there */}
            {/* End Navbar */}
          </div>
        </div>
        {/* // <!--   Core JS Files   --> */}
        <script src="../assets/js/core/jquery.min.js"></script>
        <script src="../assets/js/core/popper.min.js"></script>
        <script src="../assets/js/core/bootstrap.min.js"></script>
        <script src="../assets/js/plugins/perfect-scrollbar.jquery.min.js"></script>
        {/* // <!--  Google Maps Plugin    --> */}
        <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script>

        <script src="../assets/js/plugins/chartjs.min.js"></script>
        {/* // <!--  Notifications Plugin    --> */}
        <script src="../assets/js/plugins/bootstrap-notify.js"></script>
        {/* // <!-- Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc --> */}
        <script
          src="../assets/js/now-ui-dashboard.min.js?v=1.3.0"
          type="text/javascript"
        ></script>
        {/* // <!-- Now Ui Dashboard DEMO methods, don't include it in your project! --> */}
        <script src="../assets/demo/demo.js"></script>
      </React.Fragment>
    );
  }
}

export default AddTaskPage;
