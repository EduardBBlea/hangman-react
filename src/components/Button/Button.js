import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import "./Button.scss";

const Button = ({ letter }) => {
  const { guessLetter } = useGlobalContext();

  return (
    <button className="letter" onClick={() => guessLetter(letter)}>
      {letter}
    </button>
  );
};

export default Button;
