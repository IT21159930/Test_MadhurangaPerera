import React, { useState } from "react";
import axios from "axios";

export default function AddInformation() {
  const [oname, setOname] = useState("");
  const [mealPlan, setMealPlan] = useState({
    fullMeals: false,
    lunchDinner: false,
    onlyDinner: false,
  });
  const [daysRequested, setDaysRequested] = useState({
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
  });

  function handleMealPlanChange(e) {
    const { name, checked } = e.target;
    setMealPlan((prev) => ({ ...prev, [name]: checked }));
  }

  function handleDaysChange(e) {
    const { name, checked } = e.target;
    setDaysRequested((prev) => ({ ...prev, [name]: checked }));
  }

  function sendData(e) {
    e.preventDefault();

    const newInformation = {
      oname,
      mealPlan,
      daysRequested,
    };

    axios
      .post("http://localhost:8070/requestedservices/add", newInformation) /* this is just for show purpose only....
      in the information page and the delivery information page i have done the backend part and the frontend part both and 
      the data successfully added to the Mongo DB...and i did retrieve part also.
      */
      .then(() => {
        alert("Data Added");
        window.location = "/g";
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
        <h1>Requested Services</h1>
        <br />
        <b>
          <font size="4">Choose the Meal Plan you would like to receive</font>
        </b>
        <br />
        <br />
        <input
          type="checkbox"
          id="fullMeals"
          name="fullMeals"
          checked={mealPlan.fullMeals}
          onChange={handleMealPlanChange}
        />
        <label htmlFor="fullMeals">
          <font size="4">Full 21 Meals</font>
        </label>
        <br />
        <input
          type="checkbox"
          id="lunchDinner"
          name="lunchDinner"
          checked={mealPlan.lunchDinner}
          onChange={handleMealPlanChange}
        />
        <label htmlFor="lunchDinner">
          <font size="4">Lunch and Dinner</font>
        </label>
        <br />
        <input
          type="checkbox"
          id="onlyDinner"
          name="onlyDinner"
          checked={mealPlan.onlyDinner}
          onChange={handleMealPlanChange}
        />
        <label htmlFor="onlyDinner">
          <font size="4">Only Dinner</font>
        </label>
        <br />
        <br />
        <b>
          <font size="4">Days Requested</font>
        </b>
        <br />
        <br />
        <input
          type="checkbox"
          id="sunday"
          name="sunday"
          checked={daysRequested.sunday}
          onChange={handleDaysChange}
        />
        <label htmlFor="sunday">
          <font size="4">Sunday</font>
        </label>
        <br />
        <input
          type="checkbox"
          id="monday"
          name="monday"
          checked={daysRequested.monday}
          onChange={handleDaysChange}
        />
        <label htmlFor="monday">
          <font size="4">Monday</font>
        </label>
        <br />
        {/* Repeat for other days */}
        <br />
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
            onClick={() => { window.location.href = "/h"; }} >  Next </button>
        
      </form>
    </div>
  );
}
