import React, { Component, useEffect, useState } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [role, setrole] = useState("");
  const [patient, setpatient] = useState([]); // Task State
  const [doctor, setdoctor] = useState([]); // Task State

  const getpatient = JSON.parse(localStorage.getItem("patinetAdd"));
  const getdoctor = JSON.parse(localStorage.getItem("doctorAdd"));

  useEffect(() => {
    var storeddata = localStorage.getItem("role");
    console.log(storeddata);
    setrole(storeddata);
    setpatient(getpatient);
    setdoctor(getdoctor);
  }, []);
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
              {role === "Admin" ? (
                <li className="breadcrumb-item active">Admin</li>
              ) : role === "Doctor" ? (
                <li className="breadcrumb-item active">Doctor</li>
              ) : (
                <li className="breadcrumb-item active">Patient</li>
              )}
            </ol>

            {role === "Admin" ? (
              <div className="row">
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-primary o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-comments"></i>
                      </div>
                      <div className="mr-5">Patinet</div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to={"patientPage"}
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6 mb-3">
                  <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                      <div className="card-body-icon">
                        <i className="fas fa-fw fa-list"></i>
                      </div>
                      <div className="mr-5">Doctors</div>
                    </div>
                    <Link
                      className="card-footer text-white clearfix small z-1"
                      to="doctorPage"
                    >
                      <span className="float-left">View Details</span>
                      <span className="float-right">
                        <i className="fas fa-angle-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {role === "Patient" ? (
              <div className="card mb-3">
                <div className="card-header">
                  {/* <i className="fas fa-chart-area"></i> */}
                  Your Details
                </div>
                <div className="card-body">
                  Patient ID : PID6
                  <br />
                  First Name: Nitin
                  <br />
                  Last Name: mahajan
                  <br />
                  Age : 29
                  <br />
                  Contact Number : 1234567445
                  <br />
                  Address : bhuj - kutchh
                  <br />
                  Blood Group : B+
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>

                <div className="card mb-3">
                  <div className="card-header">
                    <i className="fas fa-table"></i>
                    &nbsp;&nbsp;Doctor List
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Doctor id</th>
                          <th>Doctor FName</th>
                          <th>Doctor LName</th>

                          {/* <th className="text-center">Action</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {doctor.map((Doctor, index) => (
                          <tr key={Doctor.pid}>
                            <td>{Doctor.pid}</td>
                            <td>{Doctor[0]["fname"]}</td>
                            <td>{Doctor[0]["lname"]}</td>
                            <td>
                              <Link
                                className="btn btn-sm btn-info"
                                //   to={{
                                //     pathname: "patientDetails",
                                //     search: "?id=" + patient.pid,
                                //   }}
                              >
                                Grant
                              </Link>
                            </td>
                            <td>
                              <Link
                                className="btn btn-sm btn-info"
                                //   to={{
                                //     pathname: "patientDetails",
                                //     search: "?id=" + patient.pid,
                                //   }}
                              >
                                Revoke
                              </Link>
                            </td>
                            {/* <td className="text-center">
                                  <Link
                                    className="btn btn-sm btn-info"
                                    to={{
                                      pathname: "edit",
                                      search: "?id=" + patient.pid,
                                    }}
                                  >
                                    Edit
                                  </Link>
                                  &nbsp; | &nbsp;
                                  <button
                                    value={patient.pid}
                                    className="btn btn-sm btn-danger"
                                    onChange={() => deleteTask(patient.pid)}
                                  >
                                    Delete
                                  </button>
                                </td> */}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="card-footer small text-muted">
                    {/* Updated yesterday at 11:59 PM */}
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}

            {role === "Doctor" ? (
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table"></i>
                  &nbsp;&nbsp;patient List
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Patient id</th>
                        <th>Patient FName</th>
                        <th>Patient LName</th>

                        {/* <th className="text-center">Action</th> */}
                      </tr>
                    </thead>
                    <tbody>
                      {patient.map((patient, index) => (
                        <tr key={patient.pid}>
                          <td>{patient.pid}</td>
                          <td>{patient[0]["fname"]}</td>
                          <td>{patient[0]["lname"]}</td>
                          <td>
                            <Link
                              className="btn btn-sm btn-info"
                              to={{
                                pathname: "patientDetails",
                                search: "?id=" + patient.pid,
                              }}
                            >
                              View More
                            </Link>
                          </td>
                          {/* <td className="text-center">
                                  <Link
                                    className="btn btn-sm btn-info"
                                    to={{
                                      pathname: "edit",
                                      search: "?id=" + patient.pid,
                                    }}
                                  >
                                    Edit
                                  </Link>
                                  &nbsp; | &nbsp;
                                  <button
                                    value={patient.pid}
                                    className="btn btn-sm btn-danger"
                                    onChange={() => deleteTask(patient.pid)}
                                  >
                                    Delete
                                  </button>
                                </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer small text-muted">
                  {/* Updated yesterday at 11:59 PM */}
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <footer className="sticky-footer">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © My Hospital 2021</span>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
