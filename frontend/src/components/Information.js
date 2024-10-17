import React, { useState } from "react";
import axios from "axios";
import './AddInformation.css';

export default function AddInformation() {
  const [oname, setOname] = useState("");
  const [cname, setCname] = useState("");
  const [age, setAge] = useState("");
  const [submitForAnother, setSubmitForAnother] = useState(false);
  const [lname, setLname] = useState("");
  const [sname, setSname] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newInformation = {
      oname,
      cname,
      age,
      submitForAnother,
      otherPersonName: submitForAnother ? `${lname} ${sname}` : null,
    };

    axios
      .post("http://localhost:8070/test/add", newInformation)
      .then(() => {
        alert("Data Added");
        window.location = "/r";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <div className="stepper">
        <div className="step active">1</div>
        <div className="step">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
        <div className="step">5</div>
      </div>
      <form onSubmit={sendData}>
        <div className="form-group">
          <b><font size="4">Applicant's Name</font></b>
          <p></p>
          <label htmlFor="oname">First Name</label>
          <input
            type="text"
            className="form-control"
            id="oname"
            placeholder="Enter first name"
            value={oname}
            onChange={(e) => setOname(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cname">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="cname"
            placeholder="Enter last name"
            value={cname}
            onChange={(e) => setCname(e.target.value)}
            required
          />
        </div>

        <b><font size="4">Are you submitting this application on behalf of someone else?</font></b>
        <p>
          <input
            type="checkbox"
            id="submitForAnother"
            name="submitForAnother"
            checked={submitForAnother}
            onChange={(e) => setSubmitForAnother(e.target.checked)}
          />
          <label htmlFor="submitForAnother"><font size="4">If yes, please provide your information below:</font></label>
        </p>

        {submitForAnother && (
          <>
            <div className="form-group">
              <label htmlFor="lname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                placeholder="Enter first name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="sname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="sname"
                placeholder="Enter last name"
                value={sname}
                onChange={(e) => setSname(e.target.value)}
              />
            </div>
          </>
        )}

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="date"
            className="form-control"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <b><font size="4">Do you have a disability?</font></b><br />
        <input type="checkbox" id="yes" name="yes" />
        <label htmlFor="yes"><font size="4">Yes</font></label>
        <input type="checkbox" id="no" name="no" />
        <label htmlFor="no"><font size="4">No</font></label>

        <div className="form-group">
          <label htmlFor="file">File Name</label>
          <input
            type="file"
            className="form-control"
            id="file"
            placeholder="Upload the file"
          />
        </div>

        <button type="submit" className="btn btn-warning">Next</button>
      </form>
    </div>
  );
}
