import React, { useState } from "react";

export default function FileNamer() {
  const [name, setName] = useState(``);
  const [alert, setAlert] = useState(false);

  function validate(event) {
    if (/\*/.test(name)) {
      event.preventDefault();
      setAlert(true);
      return;
    }
    setAlert(false);
  }

  function handleClick(event) {
    event.preventDefault();
    setAlert(true);
  }

  return (
    <div className="wrapper">
      <div className="preview">
        <h2>Preview: {name}.js</h2>
      </div>
      <form>
        <label>
          <p>Name:</p>
          <input
            autoComplete="off"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <div className="information-wrapper">
          <button
            className="information"
            onClick={handleClick}
            onBlur={() => setAlert(false)}
          >
            more information
          </button>
          {alert && (
            <div className="popup">
              {" "}
              <span role="img" aria-label="allowed">
                ✅
              </span>{" "}
              Alphanumeric Characters
              <br />
              <span role="img" aria-label="not allowed">
                ⛔️
              </span>{" "}
              *
            </div>
          )}
        </div>

        <div>
          <button onClick={validate}>Save</button>
        </div>
      </form>
    </div>
  );
}
