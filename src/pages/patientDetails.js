import React, { Component, useState, useEffect } from "react";

export default function patientDetails({ props }) {
  return (
    <div>
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
      </div>
    </div>
  );
}
