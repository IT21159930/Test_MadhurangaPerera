import React, { useState } from "react";
import axios from "axios";

export default function AddInformation() {
  const [oname, setOname] = useState("");
  const [cname, setCname] = useState("");
  const [age, setAge] = useState("");
  const [file, setFile] = useState("");
  const [sname, setSname] = useState("");
  const [lname, setLname] = useState(""); 
  const [submitForAnother, setSubmitForAnother] = useState(false);
  const [otherPersonName, setOtherPersonName] = useState("");

  const [onameError, setOnameError] = useState("");
  const [cnameError, setCnameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [fileError, setFileError] = useState("");
  const [formError, setFormError] = useState("");

  function validateForm() {
    let isValid = true;
    if (oname.trim() === "") {
      setOnameError("First Name is required");
      isValid = false;
    }
    if (cname.trim() === "") {
      setCnameError("Last Name is required");
      isValid = false;
    }
    if (age.trim() === "") {
      setAgeError("Age is required");
      isValid = false;
    }
    if (file.trim() === "") {
      setFileError("Upload a File");
      isValid = false;
    }
    if (submitForAnother && otherPersonName.trim() === "") {
      alert("Please provide the information of the person you're submitting for.");
      isValid = false;
    }
    return isValid;
  }

  function sendData(e) {
    e.preventDefault();
    if (validateForm()) {
      const newInformation = {
        oname,
        cname,
        age,
        file,
        submitForAnother,
        otherPersonName: submitForAnother ? otherPersonName : null 
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
    } else {
      setFormError("Please fill in all fields");
    }
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <div className="form-group">
          <b><font size="4">Applicant's Name</font></b>
          <p></p>
          <label htmlFor="oname">First Name</label>
          <input
            type="text"
            className={`form-control ${onameError ? "is-invalid" : ""}`}
            id="oname"
            placeholder="Enter first name"
            value={oname}
            onChange={(e) => {
              setOname(e.target.value);
              setOnameError("");
              setFormError("");
            }}
          />
          {onameError && <div className="invalid-feedback">{onameError}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="cname">Last Name</label>
          <input
            type="text"
            className={`form-control ${cnameError ? "is-invalid" : ""}`}
            id="cname"
            placeholder="Enter last name"
            value={cname}
            onChange={(e) => {
              setCname(e.target.value);
              setCnameError("");
              setFormError("");
            }}
          />
          {cnameError && <div className="invalid-feedback">{cnameError}</div>}
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
            className={`form-control ${ageError ? "is-invalid" : ""}`}
            id="age"
            placeholder="Enter age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setAgeError("");
              setFormError("");
            }}
          />
          {ageError && <div className="invalid-feedback">{ageError}</div>}
        </div>
        <b><font size="4">Do you have disability?</font></b><br></br>
          <input
            type="checkbox"
            id="yes"
            name="yes"            
          />
          <label htmlFor="submitForAnother"><font size="4">Yes</font></label>
          <input
            type="checkbox"
            id="no"
            name="No"            
          />
          <label htmlFor="submitForAnother"><font size="4">No</font></label>

        <div className="form-group">
          <label htmlFor="file">File</label>
          <input
            type="text"
            className={`form-control ${fileError ? "is-invalid" : ""}`}
            id="file"
            placeholder="Upload the File"
            value={file}
            onChange={(e) => {
              setFile(e.target.value);
              setFileError("");
              setFormError("");
            }}
          />
          {fileError && <div className="invalid-feedback">{fileError}</div>}
        </div>

        {formError && <div className="alert alert-danger">{formError}</div>}

        <button type="Next" className="btn btn-warning">
          Next
        </button>
      </form>
    </div>
  );
}
