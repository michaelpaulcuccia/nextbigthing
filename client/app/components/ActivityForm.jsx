"use client";

import { useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  color: white;
  display: flex;
  flex-direction: column;

  label {
    margin-right: 8px;
  }

  textarea {
    border: 2px solid #79797F;
    border-radius: 4px;
    resize: none;
    width: 355px;
    height: 24px;
    padding: 3px 6px;
    overflow: auto;
    font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

`;

export default function ActivityForm() {

  //DATA
  const [activityType, setActivityType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [stat1Title, setStat1Title] = useState("");
  const [stat1, setStat1Data] = useState("");
  const [stat2Title, setStat2Title] = useState("");
  const [stat2, setStat2Data] = useState("");
  const [stat3Title, setStat3Title] = useState("");
  const [stat3, setStat3Data] = useState("");
 
  //ERRORS and SUCCESS
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  //FORM STATE
  const [formState, setFormState] = useState("");

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
      {
        formState === "" ? 

          <div>
            <label htmlFor="activityType">Activity Name</label>
            <select 
              name="activityType" 
              id="activityType"
              onChange={(e) => [
                setActivityType(e.target.value), 
                setFormState(e.target.value)
              ]}
            >
            <option value="">--Please choose an option--</option>
            <option value="Hiking">Hiking</option>
            <option value="Walking">Walking</option>
            <option value="Breathwork">Breathwork</option>
          </select>
      </div>
        
        : 

        <form
          onSubmit={handleSubmit}
        >
        <div>
          <label htmlFor="date">Date</label>
          <textarea
            maxlength="40"
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

        {
          formState === 'Walking' ?
          <>
            <div>
              <label htmlFor="stat1Title">Distance</label>
              <textarea
                onChange={(e) => [
                  setStat1Data(e.target.value + ' mi'),
                  setStat1Title('distance')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add distance in miles."
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat2Title">Time</label>
              <textarea
                onChange={(e) => [
                  setStat2Data(e.target.value + ' min'),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat3Title">Speed</label>
              <textarea
                onChange={(e) => [
                  setStat3Data(e.target.value + ' mph'),
                  setStat3Title('speed')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add speed in mph"
            ></textarea>
            </div>
          </>

          :

          formState === 'Hiking' ?

          <>
            <div>
              <label htmlFor="stat1Title">Distance</label>
              <textarea
                onChange={(e) => [
                  setStat1Data(e.target.value + ' mi'),
                  setStat1Title('distance')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add distance in miles."
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat2Title">Time</label>
              <textarea
                onChange={(e) => [
                  setStat2Data(e.target.value + ' min'),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat3Title">Speed</label>
              <textarea
                onChange={(e) => [
                  setStat3Data(e.target.value + ' mph'),
                  setStat3Title('speed')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add speed in mph"
            ></textarea>
            </div>

          </>

          :

          formState === 'Breathwork' ?

          <>
            <div>
              <label htmlFor="stat1Title">Rounds</label>
              <textarea
                onChange={(e) => [
                  setStat1Data(e.target.value + ' rounds'),
                  setStat1Title('rounds')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add number of ounds."
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat2Title">Avg Retention</label>
              <textarea
                onChange={(e) => [
                  setStat2Data(e.target.value + ' min'),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </div>

            <div>
              <label htmlFor="stat3Title">Max Retention</label>
              <textarea
                onChange={(e) => [
                  setStat3Data(e.target.value + ' min'),
                  setStat3Title('max retention')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add max rentention time in min"
            ></textarea>
            </div>
          </>

          :

          <></>

        }

        <button type="submit">
          Submit
        </button>
      </form>
      }
     

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