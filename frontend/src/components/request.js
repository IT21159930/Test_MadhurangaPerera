import React, { useState } from "react";
import './AddInformation.css';

export default function AddInformation() {
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
    saturday: false,
  });

  function handleMealPlanChange(e) {
    const { name, checked } = e.target;

    if (name === "fullMeals") {
      if (checked) {
        setDaysRequested({
          sunday: true,
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: true,
        });
      } else {

        setDaysRequested({
          sunday: false,
          monday: false,
          tuesday: false,
          wednesday: false,
          thursday: false,
          friday: false,
          saturday: false,
        });
      }
    }

    setMealPlan((prev) => ({ ...prev, [name]: checked }));
  }

  function handleDaysChange(e) {
    const { name, checked } = e.target;

    if (!mealPlan.fullMeals) {
      setDaysRequested((prev) => ({ ...prev, [name]: checked }));
    }
  }

  return (
    <div className="container">
      <div className="stepper">
        <div className="step active">1</div>
        <div className="step active">2</div>
        <div className="step">3</div>
        <div className="step">4</div>
        <div className="step">5</div>
      </div>
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
      <input
        type="checkbox"
        id="tuesday"
        name="tuesday"
        checked={daysRequested.tuesday}
        onChange={handleDaysChange}
      />
      <label htmlFor="tuesday">
        <font size="4">Tuesday</font>
      </label>
      <br />
      <input
        type="checkbox"
        id="wednesday"
        name="wednesday"
        checked={daysRequested.wednesday}
        onChange={handleDaysChange}
      />
      <label htmlFor="wednesday">
        <font size="4">Wednesday</font>
      </label>
      <br />
      <input
        type="checkbox"
        id="thursday"
        name="thursday"
        checked={daysRequested.thursday}
        onChange={handleDaysChange}
      />
      <label htmlFor="thursday">
        <font size="4">Thursday</font>
      </label>
      <br />
      <input
        type="checkbox"
        id="friday"
        name="friday"
        checked={daysRequested.friday}
        onChange={handleDaysChange}
      />
      <label htmlFor="friday">
        <font size="4">Friday</font>
      </label>
      <br />
      <input
        type="checkbox"
        id="saturday"
        name="saturday"
        checked={daysRequested.saturday}
        onChange={handleDaysChange}
      />
      <label htmlFor="saturday">
        <font size="4">Saturday</font>
      </label>
      <br />
      <br />
      
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => window.history.back()}
        style={{ marginRight: '10px' }}>
        Go Back
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={() => { window.location.href = "/h"; }}>
        Next
      </button>
    </div>
  );
}
