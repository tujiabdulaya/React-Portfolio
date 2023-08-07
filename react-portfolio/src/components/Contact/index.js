import React, { useState } from "react";
import { emailValidation } from "../../assets/utils/helper";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = emailValidation(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email not valid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    }
  };
  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form
        className="col w-100 p-3 d-flex flex-column align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label text-white"> Name:</label>
          <input
            type="text"
            className="form-control"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white">Email address</label>
          <input
            type="email"
            className="form-control"
            defaultValue={email}
            name="email"
            onBlur={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-white"
          >
            {" "}
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>

        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;