import { useState } from "react";
export default function useInput(validate) {
  const [inputIsTouched, setInputIsTouched] = useState(false);
  const [input, setInput] = useState("");
  const inputIsValid = validate(input);
  const inputHasError = !inputIsValid && inputIsTouched;
  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };
  const inputBlurHandler = () => {
    setInputIsTouched(true);
  };
  return {
    input,
    setInput,
    inputIsValid,
    inputHasError,
    inputIsTouched,
    inputBlurHandler,
    setInputIsTouched,
    inputChangeHandler
  };
}
