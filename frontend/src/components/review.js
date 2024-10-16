import React, { useState, useEffect } from "react";
import axios from "axios";
import './AddInformation.css';

export default function ShowTest() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8070/test");
        setTests(response.data);
      } catch (error) {
        console.error("Error fetching test:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
       <div className="stepper">
        <div className="step active">1</div>
        <div className="step active">2</div>
        <div className="step active">3</div>
        <div className="step active">4</div>
        <div className="step">5</div>
      </div>
      <br></br>
      <h1>Review / Sign / Submit</h1>
      <br></br>
      {tests.map((test, index) => (
        <div key={index}>
          <br />
          <div className="container" style={{ backgroundColor: "lightgray" }}>
            <h3>1. Personal Information</h3>
            <div className="row">
              <Field label="First Name" value={test.oname} />
              <Field label="Last Name" value={test.cname} />
            </div>
            <div className="row">
              <Field label="Age" value={test.age} />
              
            </div>
          </div>
          <br></br>
          <div className="buttons">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => window.history.back()}
              style={{ marginRight: '10px' }}
            >
              Go Back
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => { window.location.href = "/f"; }}
            >
              Next
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const Field = ({ label, value, fullWidth = false }) => (
  <div className={`col-${fullWidth ? 12 : 6} form-group`}>
    <label>{label}</label>
    <input type="text" className="form-control" value={value} readOnly />
  </div>
);
