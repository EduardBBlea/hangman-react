import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import WordBox from "../WordBox/WordBox";

import "./Screen.scss";

const Screen = () => {
  const { wordState, gameStarted } = useGlobalContext();

  return (
    <div className="img-wrapper">
      <img src={`./img/step0.png`} />
      <div className="word-wrapper">
        <p className="secondary-text">GUESS THE WORD:</p>
        {gameStarted && <WordBox word={wordState} />}
      </div>
    </div>
  );
};

export default Screen;
