import React, { Component, useState, useEffect } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function AddPatient() {
  var Data = [];

  const [tasks, setTasks] = useState([]); // Task State

  const getTasks = JSON.parse(localStorage.getItem("patinetAdd"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    // const url = "https://gowtham-rest-api-crud.herokuapp.com/employees";
    const fname = document.getElementById("inputfname").value;
    const lname = document.getElementById("inputlname").value;
    const pid = document.getElementById("inputpid").value;
    const pAge = document.getElementById("inputage").value;
    const pCNumber = document.getElementById("inputCnumber").value;
    const pAddress = document.getElementById("inputaddress").value;
    const pBgroup = document.getElementById("inputbgroup").value;

    Data.push({
      fname: fname,
      lname: lname,
      pid: pid,
      age: pAge,
      phone: pCNumber,
      address: pAddress,
      bgroup: pBgroup,
    });

    const newTask = { pid, ...Data };
    setTasks([...tasks, newTask]);

    localStorage.setItem("patinetAdd", JSON.stringify([...tasks, newTask]));
    var storeddata = JSON.parse(localStorage.getItem("patinetAdd")); //get them back
    console.log(storeddata);
  };

  return (
    <div>
      <Header />
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">Add</li>
            </ol>
          </div>
          <div className="container-fluid">
            <div className="card mx-auto">
              <div className="card-header">Patient Add</div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputpid"
                            className="form-control"
                            placeholder="Enter Patient Id"
                            required="required"
                            autoFocus="autofocus"
                          />
                          <label htmlFor="inputpid">Enter Patient Id</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputfname"
                            className="form-control"
                            placeholder="Enter Patient First Name"
                            required="required"
                          />
                          <label htmlFor="inputfname">
                            Enter Patient First Name
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputlname"
                            className="form-control"
                            placeholder="Enter Patient Last Name"
                            required="required"
                          />
                          <label htmlFor="inputlname">
                            Enter Patient Last Name
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="number"
                            id="inputage"
                            className="form-control"
                            placeholder="Enter Age"
                            required="required"
                          />
                          <label htmlFor="inputage"> Enter Patient Age</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="number"
                            id="inputCnumber"
                            className="form-control"
                            placeholder="Enter Patinet Contact Number"
                            required="required"
                          />
                          <label htmlFor="inputCnumber">
                            Enter Patient Contact Number
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputaddress"
                            className="form-control"
                            placeholder="Enter Location"
                            required="required"
                          />
                          <label htmlFor="inputaddress">
                            Enter Patient Address
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputbgroup"
                            className="form-control"
                            placeholder="Enter Patinet Blood Group"
                            required="required"
                          />
                          <label htmlFor="inputbgroup">
                            Enter Patient Blood Group
                          </label>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputaddress"
                              className="form-control"
                              placeholder="Enter Location"
                              required="required"
                            />
                            <label htmlFor="inputaddress">Enter Patient Address</label>
                          </div>
                        </div> */}
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    //   disabled={this.state.isLoading ? true : false}
                  >
                    Add Patient &nbsp;&nbsp;&nbsp;
                    {/* {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span></span>
                      )} */}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <footer className="sticky-footer">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>
                  Copyright © Your Website <div>{new Date().getFullYear()}</div>
                </span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
