"use client";

import { useState } from "react";

export default function ActivityForm() {
  const [activityType, setActivityType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("api/uploaddata", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        activityType,
        date,
        time
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setActivityType("");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor="activityType">Activity Name</label>
          <select 
            name="activityType" 
            id="activityType"
            onChange={(e) => setActivityType(e.target.value)}
          >
            <option value="">--Please choose an option--</option>
            <option value="Hiking">Hiking</option>
            <option value="Walking">Walking</option>
            <option value="Breathwork">Breathwork</option>
          </select>
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <textarea
            onChange={(e) => setDate(e.target.value)}
            value={date}
            id="date"
            placeholder="Type the date here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <textarea
            onChange={(e) => setTime(e.target.value)}
            value={time}
            id="time"
            placeholder="Type the time here."
          ></textarea>
        </div>

        <button type="submit">
          Submit
        </button>
      </form>

      <div>
        {error &&
          error.map((e) => (
            <div>
              {e}
            </div>
          ))}
      </div>
    </>
  );
}