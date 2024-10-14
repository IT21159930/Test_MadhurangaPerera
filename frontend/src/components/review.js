import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ShowTest() {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
     
        const [response1, response2] = await Promise.all([
          axios.get("http://localhost:8070/test"),
          axios.get("http://localhost:8070/test/all")
        ]);

       
        setTests([...response1.data, ...response2.data]);
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
      <h1>Review / Sign / Submit</h1>
      {tests.map((test, index) => (
        <div key={index}>
          <br />
          <div className="container" style={{ backgroundColor: "lightgray" }}>
            
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Age</th>
                  <th>File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{test.oname}</td>
                  <td>{test.cname}</td>
                  <td>{test.age}</td>
                  <td>{test.file}</td>
                </tr>
              </tbody>
            </table>

            
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Street</th>
                  <th>Apartment</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Postal</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{test.d1}</td>
                  <td>{test.d2}</td>
                  <td>{test.d3}</td>
                  <td>{test.d4}</td>
                  <td>{test.d5}</td>
                  <td>{test.d6}</td>
                  <td>{test.d7}</td>
                </tr>
              </tbody>
            </table>
          </div>

         
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => window.history.back()}
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
      ))}
    </div>
  );
}
