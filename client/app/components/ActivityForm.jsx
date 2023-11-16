"use client";

import { useState } from "react";
import styled from "styled-components";
import { useRouter } from 'next/navigation';

const Root = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 352px;

  label {
    margin-right: 32px;
    width: 50px;
  }

  textarea {
    border: 2px solid #79797F;
    border-radius: 4px;
    resize: none;
    width: 225px;
    height: 24px;
    padding: 3px 6px;
    overflow: auto;
    font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  h3 {
    text-align: center;
    padding-bottom: 10px;
  }

`;

const FormItem = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0;
`;

const StyledButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  margin-top: 10px;
  &:hover {
    background: #d5cbcb;
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

  const router = useRouter();

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
      router.push('/activities/')
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
        <h3>{formState}</h3>
        <FormItem>
          <label htmlFor="date">Date</label>
          <textarea
            maxlength="25"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            id="date"
            placeholder="Type the date here."
          ></textarea>
        </FormItem>

        <FormItem>
          <label htmlFor="time">Time</label>
          <textarea
            maxlength="25"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            id="time"
            placeholder="Type the time here."
          ></textarea>
        </FormItem>

        {
          formState === 'Walking' ?
          <>
            <FormItem>
              <label htmlFor="stat1Title">Distance</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat1Data(e.target.value),
                  setStat1Title('distance')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add distance in miles."
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat2Title">Time</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat2Data(e.target.value),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat3Title">Speed</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat3Data(e.target.value),
                  setStat3Title('speed')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add speed in mph"
            ></textarea>
            </FormItem>
          </>

          :

          formState === 'Hiking' ?

          <>
            <FormItem>
              <label htmlFor="stat1Title">Distance</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat1Data(e.target.value),
                  setStat1Title('distance')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add distance in miles."
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat2Title">Time</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat2Data(e.target.value),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat3Title">Speed</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat3Data(e.target.value),
                  setStat3Title('speed')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add speed in mph"
            ></textarea>
            </FormItem>

          </>

          :

          formState === 'Breathwork' ?

          <>
            <FormItem>
              <label htmlFor="stat1Title">Rounds</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat1Data(e.target.value + ' rounds'),
                  setStat1Title('rounds')
                ]}
                value={stat1}
              id="stat1"
              placeholder="Add number of ounds."
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat2Title">Avg Retention</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat2Data(e.target.value),
                  setStat2Title('time')
                ]}
                value={stat2}
              id="stat2"
              placeholder="Add time in minutes"
            ></textarea>
            </FormItem>

            <FormItem>
              <label htmlFor="stat3Title">Max Retention</label>
              <textarea
                maxlength="25"
                onChange={(e) => [
                  setStat3Data(e.target.value),
                  setStat3Title('max retention')
                ]}
                value={stat3}
              id="stat3"
              placeholder="Add max rentention time in min"
            ></textarea>
            </FormItem>
          </>

          :

          <></>

        }
          <StyledButton type="submit">
            Submit
          </StyledButton>
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