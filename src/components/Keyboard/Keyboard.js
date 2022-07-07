import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import Button from "../Button/Button";

import "./Keyboard.scss";

const Keyboard = () => {
  const { alphabet, wrongTries } = useGlobalContext();

  if (wrongTries === 6) {
    return (
      <div className="letters-container">
        <h1>GAME OVER</h1>
      </div>
    );
  }

  return (
    <div className="letters-container">
      {alphabet.map((letter) => (
        <Button letter={letter.toUpperCase()} key={letter} />
      ))}
    </div>
  );
};

export default Keyboard;
