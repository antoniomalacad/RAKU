import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

export default function EmailModal(props) {
  const [times, setTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState("00");
  const [email, setEmail] = useState("");
  const [initialEmail, setInitialEmail] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  const addTime = () => {
    if (times.includes(selectedTime)) return;
    setTimes([...times, selectedTime]);
    setSelectedTime("00");
  };

  const removeTime = inTime => setTimes(times.filter(x => x != inTime));
  const updateTime = e => setSelectedTime(e.target.value);
  const updateEmail = e => setEmail(e.target.value);
  const submitForm = () => {
    setIsLoading(true);
    axios("/api/email-times", {
      method: "PUT",
      data: {
        old_email: initialEmail,
        new_email: email,
        times: times
      }
    }).then(() => {
      console.log("done!");
      localStorage.email = email;
      props.close();
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
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.open}
      onClose={props.close}
    >
      <div style={modalStyle} className={classes.paper}>
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
            {isLoading ? (
              "Please wait a moment!"
            ) : (
              <button onClick={submitForm}>Send me mails!</button>
            )}
          </div>
        </div>
        <EmailModal />
      </div>
    </Modal>
  );
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  }
}));
