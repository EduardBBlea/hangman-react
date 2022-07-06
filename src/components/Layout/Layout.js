import React from "react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import Screen from "../Screen/Screen";
import Keyboard from "../Keyboard/Keyboard";

import "./Layout.scss";

const Layout = () => {
  const { gameStarted, startGame } = useGlobalContext();

  return (
    <div className="layout">
      {!gameStarted && (
        <button className="start-button" onClick={startGame}>
          START GAME
        </button>
      )}
      <Screen />
      <Keyboard />
    </div>
  );
};

export default Layout;
