import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import Button from "../Button/Button";

import "./Keyboard.scss";

const Keyboard = () => {
  const { alphabet } = useGlobalContext();

  return (
    <div className="letters-container">
      {alphabet.map((letter) => (
        <Button letter={letter.toUpperCase()} key={letter} />
      ))}
    </div>
  );
};

export default Keyboard;
