"use client";

import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export default function ActivityForm() {
  const [activityType, setActivityType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [stat1Title, setStat1Title] = useState("");
  const [stat1, setStat1Data] = useState("");
  const [stat2Title, setStat2Title] = useState("");
  const [stat2, setStat2Data] = useState("");
  const [stat3Title, setStat3Title] = useState("");
  const [stat3, setStat3Data] = useState("");
 

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
        time,
        stat1Title,
        stat1,
        stat2Title,
        stat2,
        stat3Title,
        stat3,
      }),
    });

    const { msg, success } = await res.json();

    setError(msg);
    setSuccess(success);

    if (success) {
      setActivityType("");
      setDate("");
      setTime("");
      setStat1Title("");
      setStat1Data("");
      setStat2Title("");
      setStat2Data("");
      setStat3Title("");
      setStat3Data("");
    }
    
  };

  return (
    <Root>
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

        <div>
          <label htmlFor="stat1Title">Stat 1 Title</label>
          <p>distance, rounds</p>
          <textarea
            onChange={(e) => setStat1Title(e.target.value)}
            value={stat1Title}
            id="stat1Title"
            placeholder="Type the Stat 1 Title here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="stat1Title">Stat 1 Data</label>
          <textarea
            onChange={(e) => setStat1Data(e.target.value)}
            value={stat1}
            id="stat1"
            placeholder="Type the Stat 1 Data here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="stat2Title">Stat 2 Title</label>
          <p>time, avg retention</p>
          <textarea
            onChange={(e) => setStat2Title(e.target.value)}
            value={stat2Title}
            id="stat2Title"
            placeholder="Type the Stat 2 Title here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="stat1Title">Stat 2 Data</label>
          <textarea
            onChange={(e) => setStat2Data(e.target.value)}
            value={stat2}
            id="stat2"
            placeholder="Type the Stat 2 Data here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="stat3Title">Stat 3 Title</label>
          <p>speed, max retention</p>
          <textarea
            onChange={(e) => setStat3Title(e.target.value)}
            value={stat3Title}
            id="stat3Title"
            placeholder="Type the Stat 3 Title here."
          ></textarea>
        </div>

        <div>
          <label htmlFor="stat3Title">Stat 3 Data</label>
          <textarea
            onChange={(e) => setStat3Data(e.target.value)}
            value={stat3}
            id="stat3"
            placeholder="Type the Stat 3 Data here."
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
    </Root>
  );
}