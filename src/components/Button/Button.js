import React, { useState } from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import "./Button.scss";

const Button = ({ letter }) => {
  const [disabled, setDisabled] = useState(false);

  const { guessLetter } = useGlobalContext();

  return (
    <button
      className={disabled ? "letter-button-disabled" : "letter-button"}
      disabled={disabled}
      onClick={() => {
        guessLetter(letter);
        setDisabled(true);
      }}
    >
      {letter}
    </button>
  );
};

export default Button;
