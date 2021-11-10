import React, { Component, useEffect, useState } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default function PatientPage() {
  const [tasks, setTasks] = useState([]); // Task State

  const getTasks = JSON.parse(localStorage.getItem("patinetAdd"));
  useEffect(() => {
    if (getTasks == null) {
      setTasks([]);
    } else {
      setTasks(getTasks);
    }
  }, []);

  const deleteTask = (id) => {
    console.log(id);
    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    console.log(deleteTask);
    localStorage.setItem("patinetAdd", JSON.stringify(deleteTask));
  };
  return (
    <div>
      <Header />
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper">
          <div className="container-fluid">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li className="breadcrumb-item active">patient</li>

              <li className="ml-auto">
                <Link to={"addpatient"}>Create Patient</Link>
              </li>
            </ol>
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
                    {tasks.map((patient, index) => (
                      <tr key={patient.pid}>
                        <td>{patient.pid}</td>
                        <td>{patient[0]["fname"]}</td>
                        <td>{patient[0]["lname"]}</td>
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
          <footer className="sticky-footer">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2019</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
