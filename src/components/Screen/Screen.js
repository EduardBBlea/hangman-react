import React from "react";

import WordBox from "../WordBox/WordBox"

import "./Screen.scss";

const Screen = () => {
  return (
    <div className="img-wrapper">
      <img src={"./img/step0.png"} />
      <div className="word-wrapper">
        <p className="secondary-text">GUESS THE WORD:</p>
        <WordBox />
      </div>
    </div>
  );
};

export default Screen;
