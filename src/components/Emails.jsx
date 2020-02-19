import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Emails() {
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("00");
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState("");

  const addTime = () => {
    if (times.includes(selectedTime)) return;
    setTimes([...times, selectedTime]);
    setSelectedTime("00");
  };
  const removeTime = inTime => setTimes(times.filter(x => x != inTime));
  const updateTime = e => setSelectedTime(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const submitForm = () => {
    axios("/api/email-times", {
      method: "POST",
      data: {
        old_email: initialEmail,
        new_email: email,
        times: times
      }
    });
  };

  useEffect(() => {
    if (localStorage.email) {
      setEmail(localStorage.email);
      setInitialEmail(localStorage.email);
    }
    if (localStorage.email)
      axios(`/api/email-times/${localStorage.email}`, {
        method: "GET"
      })
        .then(data => data.data)
        .then(data => setTimes(data));
  }, []);

  const timeStops = [];
  for (let i = 0; i < 24; i++) {
    const key = `${i}`.padStart(2, "0");
    timeStops.push(
      <option value={key} selected={key == selectedTime ? "selected" : false}>
        {key}:00
      </option>
    );
  }

  return (
    <div>
      Send me positive emails at...
      <div>
        {times.map(x => (
          <div
            class=""
            style={{
              display: "inline-block",
              margin: "5px",
              padding: "5px",
              backgroundColor: "#ddd",
              cursor: "pointer"
            }}
            onClick={() => removeTime(x)}
          >
            {x}:00
          </div>
        ))}
      </div>
      <div>
        <h4>Add time:</h4>
        <select onBlur={updateTime}>{timeStops}</select>
        <button onClick={addTime}>Add time</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <button onClick={submitForm}>Send me mails!</button>
      </div>
    </div>
  );
}
