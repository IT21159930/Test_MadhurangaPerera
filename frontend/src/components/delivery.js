import React, { useState } from "react";
import axios from "axios";

export default function AddInformation() {
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [d3, setD3] = useState("");
  const [d4, setD4] = useState("");
  const [d5, setD5] = useState("");
  const [d6, setD6] = useState(""); 
  const [d7, setD7] = useState("");
  const [d8, setD8] = useState(""); 

  function sendData(e) {
    e.preventDefault();
    const newInformation = {
      d1,
      d2,
      d3,
      d4,
      d5,
      d6,
      d7,
      d8
    };

    axios
      .post("http://localhost:8070/test/adds", newInformation)
      .then(() => {
        alert("Data Added");
        window.location = "/y";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <b><font size="4">Applicant's Name</font></b>
          <p></p>
          <label htmlFor="d1">Street Name</label>
          <input
            type="text"
            className="form-control"
            id="d1"
            placeholder="Enter first name"
            value={d1}
            onChange={(e) => setD1(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="d2">Apartment</label>
          <input
            type="text"
            className="form-control"
            id="d2"
            placeholder="Enter last name"
            value={d2}
            onChange={(e) => setD2(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="d3">City</label>
          <input
            type="text"
            className="form-control"
            id="d3"
            placeholder="Enter City"
            value={d3}
            onChange={(e) => setD3(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="d4">State</label>
          <input
            type="text"
            className="form-control"
            id="d4"
            placeholder="Enter State"
            value={d4}
            onChange={(e) => setD4(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="d5">Postal</label>
          <input
            type="text"
            className="form-control"
            id="d5"
            placeholder="Enter Postal"
            value={d5}
            onChange={(e) => setD5(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="d6">Country</label>
          <input
            type="text"
            className="form-control"
            id="d6"
            placeholder="Enter Country"
            value={d6}
            onChange={(e) => setD6(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="d7">Delivery Instructions (Optional)</label>
          <input
            type="text"
            className="form-control"
            id="d7"
            placeholder="Delivery Instructions"
            value={d7}
            onChange={(e) => setD7(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="d8">Email</label>
          <input
            type="text"
            className="form-control"
            id="d8"
            placeholder="Email"
            value={d8}
            onChange={(e) => setD8(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}
