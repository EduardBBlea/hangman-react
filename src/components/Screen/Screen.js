import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import WordBox from "../WordBox/WordBox";

import "./Screen.scss";

const Screen = () => {
  const { wordState, gameStarted, wrongTries } = useGlobalContext();

  return (
    <div className="img-wrapper">
      <img src={`./img/step${wrongTries}.png`} alt="background" />
      <div className="word-wrapper">
        {gameStarted && (
          <div>
            <p className="secondary-text">GUESS THE WORD:</p>
            <WordBox word={wordState} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Screen;
