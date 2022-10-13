import { useState, useEffect } from "react";
import useInput from "../hook/use-input";
const BasicForm = (props) => {
  const [formHasError, setFormHasError] = useState(false);

  const {
    setInputIsTouched: setNameInputIsTouched,
    inputIsValid: nameInputIsValid,
    input: nameInput,
    setInput: setNameInput,
    inputHasError: nameInputHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler
  } = useInput((input) => input.trim() !== "");
  const {
    setInputIsTouched: setLastNameInputIsTouched,
    inputIsValid: lastNameInputIsValid,
    input: lastNameInput,
    setInput: setLastNameInput,
    inputHasError: lastNameInputHasError,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler
  } = useInput((input) => input.trim() !== "");
  const {
    setInputIsTouched: setEmailInputIsTouched,
    inputIsValid: emailInputIsValid,
    input: emailInput,
    setInput: setEmailInput,
    inputHasError: emailInputHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler
  } = useInput((input) => {
    const test3 = input.slice(0, input.indexOf("@")).length > 0;
    const test4 =
      input.slice(input.indexOf("@") + 1, input.indexOf(".")).length > 0;
    const test5 = input.slice(input.indexOf(".") + 1).length > 0;
    return (
      input.includes("@") && input.includes(".com") && test3 && test4 && test5
    );
  });
  useEffect(() => {
    if (nameInputIsValid && lastNameInputIsValid && emailInputIsValid) {
      setFormHasError(false);
    } else {
      setFormHasError(true);
    }
  }, [nameInputIsValid, lastNameInputIsValid, emailInputIsValid]);
  function setFormTouched() {
    setNameInputIsTouched(true);
    setLastNameInputIsTouched(true);
    setEmailInputIsTouched(true);
  }
  function resetForm() {
    //
    setNameInput("");
    setNameInputIsTouched(false);
    //
    setLastNameInput("");
    setLastNameInputIsTouched(false);
    //
    setEmailInput("");
    setEmailInputIsTouched(false);
  }
  const formSubmitHandler = (event) => {
    event.preventDefault();
    setFormTouched();
    if (formHasError) {
      return;
    }

    resetForm();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          {nameInputHasError && (
            <p className="error-text">First Name input can't be empty</p>
          )}
          <input
            type="text"
            id="name"
            value={nameInput}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          {lastNameInputHasError && (
            <p className="error-text">Last Name input can't be empty</p>
          )}
          <input
            type="text"
            id="name"
            value={lastNameInput}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        {emailInputHasError && (
          <p className="error-text">Email must contain @</p>
        )}
        <input
          type="text"
          id="name"
          value={emailInput}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
