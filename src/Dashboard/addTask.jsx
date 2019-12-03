import React, { useState } from "react";
import ComboBox from "../Dashboard/combobox";
import Auth from "../auth";
class AddTask extends React.Component {
  state = {
    questionsList: [],
    qCounter: [],
    // optionField: "",
    optionInputCounter: -1,
    optionInput: [],
    optionList: [],
    selectedItem: [],
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    rewardAmount: "",
    returnOnPurchase: "",
    questionText: "",
    tid: ""
  };

  formHandler = e => {
    // console.log(e.target.name);
    if (e.target.name === "title") {
      this.setState({ title: e.target.value });
    }
    if (e.target.name === "description") {
      this.setState({ description: e.target.value });
    }

    if (e.target.name === "startDate") {
      this.setState({ startDate: e.target.value });
    }

    if (e.target.name === "endDate") {
      this.setState({ endDate: e.target.value });
    }
    if (e.target.name === "rewardAmount") {
      this.setState({ rewardAmount: e.target.value });
    }
    if (e.target.name === "returnOnPurchase") {
      this.setState({ returnOnPurchase: e.target.value });
    }
    // if (e.target.name === "country") {
    //   this.setState({ country: e.target.value });
    // }
  };

  questionSubmitHandler = e => {
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/addquestion", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthYmFiamVlc0BnbWFpbC5jb20iLCJyb2xlIjoiUmVzdGF1cmFudCIsIm5iZiI6MTU3NTI3NjAwMiwiZXhwIjoxNTc3ODY4MDAyLCJpYXQiOjE1NzUyNzYwMDJ9.sJB6YyppbuR5LBSlELfLrihu5YBRq23nSXbwEObRe5U",
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        tid: this.state.tid,
        questionText: this.state.questionText
      })
    })
      .then(function(res) {
        // console.log(res);

        return res.json();
      })
      .then(response => {
        console.log(this.state.title);
        console.log("response of server:");
        console.log(response);
      })
      .catch(function(res) {
        console.log(res);
      });
  };

  onSubmitTask = e => {
    console.log("in submitting task");
    e.preventDefault();
    fetch("https://mysteryshopper1.azurewebsites.net/api/r/broadcasttask", {
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
        bId: 2,
        tTitle: this.state.title,
        tDescription: this.state.description,
        // tStartDate: this.startDate,
        // tEndDate: this.state.endDate,
        tRewardAmount: parseInt(this.state.rewardAmount),
        tReturnOnPurchase: parseInt(this.state.returnOnPurchase)
      })
    })
      .then(function(res) {
        // console.log(res);

        return res.json();
      })
      .then(response => {
        console.log(this.state.title);
        console.log("response of server:");
        let tid = response.TId;
        this.setState({ tid: tid });
        let arr = [];
        for (let k = 0; k < this.state.questionsList.length; k++) {
          arr.push(this.state.questionsList[k]["value"]);
        }
        this.setState({ questionText: arr });
        this.questionSubmitHandler();
      })
      .catch(function(res) {
        console.log(res);
      });
  };
  deleteQuestionHandler = e => {
    let qIndex = e.target.id;
    let optionList1 = [];
    let optionInput1 = [];
    let questionsList1 = [];
    for (let i = 0; i < this.state.optionList.length; i++) {
      if (String(this.state.optionList[i]["id"]) === String(qIndex)) continue;
      optionList1.push(this.state.optionList[i]);
    }
    for (let i = 0; i < this.state.optionInput.length; i++) {
      if (String(this.state.optionInput[i]["id"]) === String(qIndex)) continue;
      optionInput1.push(this.state.optionInput[i]);
    }

    for (let i = 0; i < this.state.questionsList.length; i++) {
      if (String(this.state.questionsList[i]["id"]) === String(qIndex))
        continue;
      console.log(this.state.questionsList[i]);
      questionsList1.push(this.state.questionsList[i]);
    }

    // this.state.qCounter.pop();
    // this.state.questionsList = [];
    // this.state.optionInput = [];
    // this.state.optionList = [];

    console.log(this.state.optionInput);
    console.log(this.state.optionList);
    console.log(this.state.questionsList);

    // for (let i = 0; i < this.state.optionList.length; i++) {
    //   this.state.optionList[i]["id"] = i;
    // }
    // for (let i = 0; i < this.state.optionInput.length; i++) {
    //   this.state.optionInput[i]["id"] = i;
    // }

    // for (let i = 0; i < this.state.questionsList.length; i++) {
    //   this.state.questionsList[i]["id"] = i;
    // }
  };

  removeOptionHandler = e => {
    let rowIndex = e.target.id;
    let itemIndex = this.state.selectedItem[rowIndex]["item"];
    let optionList = this.state.optionList;
    console.log(rowIndex, "   remove options array= ", optionList);
    console.log("remove options here= ", optionList[rowIndex]);
    if (optionList[rowIndex]["value"].length > 0) {
      optionList[rowIndex]["value"].splice(itemIndex, 1);
      this.setState({ optionList, optionList });
    } else {
      alert("No Items in list");
      return;
    }
    for (let i = 0; i < this.state.selectedItem.length; i++) {
      this.state.selectedItem[i]["item"] = 0;
    }

    // console.log(optionList);
  };

  selectedOptionsHandler = e => {
    // console.log(e.nativeEvent.target.selectedIndex);
    // console.log(e.target.id);
    let rowIndex = e.target.id;
    let itemIndex = e.nativeEvent.target.selectedIndex;
    this.state.selectedItem[rowIndex]["item"] = itemIndex;
  };
  addOptionBtnHandler = e => {
    let id = e.target.id;
    let optionInput = this.state.optionInput;
    let foundInput = false,
      foundList = false;
    let inputValue = "";
    for (let k = 0; k < optionInput.length; k++) {
      let check = optionInput[k];
      if (check["id"] === id) {
        inputValue = optionInput[k]["value"];
        if (inputValue == "") {
          alert("Option Required");
          return;
        }
        optionInput[k]["value"] = "";

        // console.log(optionInput);
        foundInput = true;
      }
    }
    if (!foundInput) {
      alert("Option Required");
      return;
    }
    let optionList = this.state.optionList;
    let listArr = { id: id, value: [inputValue] };
    for (let k = 0; k < optionList.length; k++) {
      let check = optionList[k];
      if (check["id"] === id) {
        optionList[k]["value"].push(inputValue);
        foundList = true;
      }
    }
    if (!foundList) {
      optionList.push(listArr);
    }
    this.setState({ optionList: optionList });
  };
  addOptionListHandler = e => {
    let id = e.target.id;
    let arr = {};
  };
  addOptionFieldHandler = e => {
    let value = e.target.value;
    let found = false;
    let id = e.target.id;
    let arr = { value: value, id: id };
    let optionInput = this.state.optionInput;
    // console.log(optionInput.length);
    for (let k = 0; k < optionInput.length; k++) {
      let check = optionInput[k];
      if (check["id"] === id) {
        optionInput[k]["value"] = value;
        found = true;
      }
    }
    if (!found) {
      optionInput.push(arr);
    }
    this.setState({ optionInput: optionInput });
  };
  askedQuestionHandler = e => {
    let id = e.target.id;
    let value = e.target.value;
    let questionsList = this.state.questionsList;
    for (let k = 0; k < questionsList.length; k++) {
      let check = questionsList[k];
      if (check["id"] === id) {
        questionsList[k]["value"] = value;
      }
    }
    this.setState({ questionsList: questionsList });
  };
  addQuestionHandler = e => {
    e.preventDefault();
    this.state.optionInputCounter = this.state.optionInputCounter + 1;
    // console.log(this.state.optionInputCounter);
    this.setState({
      optionInput: this.state.optionInput.concat({
        id: String(this.state.optionInputCounter),
        value: ""
      })
    });
    this.state.optionList.push({
      id: String(this.state.optionInputCounter),
      value: []
    });
    this.state.questionsList.push({
      id: String(this.state.optionInputCounter),
      value: ""
    });
    this.state.selectedItem.push({ item: 0 });
    this.setState({ qCounter: this.state.qCounter.concat("1") });
  };
  render() {
    return (
      <React.Fragment>
        {/* Side menu */}
        {/* <!-- Latest compiled and minified CSS --> */}

        {/* <!-- jQuery library --> */}

        {/* End Nave Bar */}
        <div className="panel-header panel-header-sm"></div>
        <div className="content">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header"></div>
                <div className="card-body">
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
                          Franchise's Address
                        </label>

                        <div style={{ paddingTop: "10%" }}>
                          <ComboBox />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* form */}
                  <form onSubmit={this.onSubmitTask}>
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
                            required
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
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 pr-1">
                        <div className="form-group">
                          <label style={{ color: "black" }}>
                            Reward Amount
                          </label>
                          <input
                            type="number"
                            name="rewardAmount"
                            className="form-control"
                            placeholder="Reward Amount"
                            value={this.state.rewardAmount}
                            onChange={this.formHandler}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 pl-1">
                        <div className="form-group">
                          <label style={{ color: "black" }}>
                            Return on purchase
                          </label>
                          <input
                            type="number"
                            name="returnOnPurchase"
                            className="form-control"
                            placeholder="Return On purchase"
                            value={this.state.returnOnPurchase}
                            onChange={this.formHandler}
                            required
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
                            name="title"
                            value={this.state.title}
                            className="form-control"
                            placeholder="Title"
                            onChange={this.formHandler}
                            required
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
                            name="description"
                            className="form-control"
                            placeholder="Write Description there!"
                            value={this.state.description}
                            onChange={this.formHandler}
                            style={{
                              height: "100px",
                              // border: "1px solid black",
                              border: "1px solid #ced4da",

                              borderRadius: "1px"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <button
                        className="customBtn"
                        style={{
                          width: "15%",
                          minHeight: "25px",
                          marginLeft: "2%",
                          marginBottom: "2%"
                        }}
                        onClick={this.addQuestionHandler}
                      >
                        Add Question
                        <i
                          className="fa fa-plus"
                          style={{ paddingLeft: "6%" }}
                        ></i>
                      </button>
                    </div>

                    <table>
                      <tbody>
                        {this.state.qCounter.map((qCounter, index) => (
                          <tr key={index} style={{ height: "42px" }}>
                            <th style={{ width: "5%" }}>
                              <label
                                style={{
                                  color: "black",
                                  paddingRight: "2%",
                                  fontSize: "16px"
                                }}
                              >
                                Q{index + 1}#
                              </label>
                            </th>
                            <th style={{ width: "45%" }}>
                              <textarea
                                id={index}
                                key={index}
                                type="text"
                                className="form-control"
                                onChange={this.askedQuestionHandler}
                                value={this.state.questionsList[index]["value"]}
                                placeholder="Asked Question.."
                                style={{
                                  // marginRight: "32%",
                                  // paddingBottom: "6%",
                                  // border: "1px solid black",
                                  borderRadius: "1px",
                                  // width: "80%"
                                  height: "40px"
                                  // marginTop: "6%"
                                }}
                              />
                            </th>
                            <th style={{ width: "20%" }}>
                              <input
                                key={index}
                                id={index}
                                onChange={this.addOptionFieldHandler}
                                value={this.state.optionInput[index]["value"]}
                                type="text"
                                placeholder="Write Options"
                                className="form-control"
                                style={{ width: "100%" }}
                              ></input>
                            </th>
                            <th>
                              <button
                                key={index}
                                id={index}
                                title="Add Options"
                                onClick={this.addOptionBtnHandler}
                                type="button"
                                // className="btn_type_a"
                                style={{
                                  height: "41px",
                                  // paddingRight: "8%"
                                  borderRadius: "1px"
                                }}
                              >
                                <i
                                  id={index}
                                  className="fa fa-plus hover_plus_icon"
                                ></i>
                              </button>
                            </th>
                            <th style={{ width: "15%" }}>
                              <select
                                onChange={this.selectedOptionsHandler}
                                key={index}
                                id={index}
                                defaultValue=""
                                style={{
                                  width: "100%",
                                  height: "41px",
                                  color: "black"
                                }}
                              >
                                {/* <option></option> */}
                                {this.state.optionList.map((values, index2) => {
                                  return values["id"] === String(index)
                                    ? values["value"].map((item, index3) => {
                                        return (
                                          <option
                                            value={item}
                                            key={
                                              String(index2) + String(index3)
                                            }
                                          >
                                            {item}
                                          </option>
                                        );
                                      })
                                    : null;
                                })}
                              </select>
                            </th>
                            <th>
                              <button
                                // className="classic"
                                id={index}
                                onClick={this.removeOptionHandler}
                                title="Remove Selected Options"
                                type="button"
                                style={{
                                  paddingLeft: "0%",
                                  borderRadius: "1px"
                                }}
                              >
                                <i
                                  id={index}
                                  className="fa fa-trash hover_trash_icon"
                                ></i>
                              </button>
                            </th>
                            <th style={{ width: "8%", background: "red" }}>
                              <button
                                style={{
                                  background: "red",
                                  color: "white",
                                  width: "100%",
                                  height: "100%"
                                }}
                                onClick={this.deleteQuestionHandler}
                                id={index}
                                title={"Delete Q" + (index + 1) + "#"}
                                className="hover_trash_icon"
                                type="button"
                              >
                                DELETE
                              </button>
                            </th>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <button
                      className="customBtn"
                      type="submit"
                      // onClick={this.onSubmitTask}
                      style={{
                        marginLeft: "40%",
                        width: "10%",
                        marginTop: "2%"
                      }}
                    >
                      Submit
                    </button>
                  </form>

                  {/* <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <button
                            className="customBtn"
                            type="submit"
                            style={{ marginLeft: "40%", width: "10%" }}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div> */}
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
