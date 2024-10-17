import React, { useState, useEffect } from "react";
import axios from "axios";
import './AddInformation.css';

export default function ShowTest() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8070/test/all");
        setTests(response.data);
      } catch (error) {
        console.error("Error fetching tests:", error);
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
      <h3>2. Address Information</h3>
      {tests.map((test, index) => (
        <div key={index}>
          <div className="row">
            <Field label="Street" value={test.d1} />
            <Field label="Apartment" value={test.d2} />
          </div>
          <div className="row">
            <Field label="City" value={test.d3} />
            <Field label="State" value={test.d4} />
          </div>
          <div className="row">
            <Field label="Postal" value={test.d5} />
            <Field label="Contact Number" value={test.d6} />
          </div>
          <div className="row">
            <Field label="Email" value={test.d7} fullWidth />
          </div>
        </div>
      ))}
      <br />
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
          onClick={() => { window.location.href = "/finl"; }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

const Field = ({ label, value, fullWidth = false }) => (
  <div className={`col-${fullWidth ? 12 : 6} form-group`}>
    <label>{label}</label>
    <input type="text" className="form-control" value={value} readOnly />
  </div>
);
