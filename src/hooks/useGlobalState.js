import { useEffect, useState } from "react";

import { alphabet } from "../static/alphabet";

const useGlobalState = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [word, setWord] = useState("");
  const [pickedLetters, setPickedLetters] = useState([]);
  const [wordState, setWordState] = useState("");

  const startGame = () => {
    setGameStarted(true);
  };

  const guessLetter = (letter) => {
    setPickedLetters([...pickedLetters, letter]);
  };

  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((data) => setWord(data[0].toUpperCase()));
  }, [gameStarted]);

  useEffect(() => {
    const $wordState = word
      .split("")
      .map((letter) => (pickedLetters.indexOf(letter) >= 0 ? letter : "_"))
      .join("");
    console.log($wordState);
    setWordState($wordState);
  }, [pickedLetters, word, gameStarted]);

  return {
    gameStarted,
    word,
    pickedLetters,
    setPickedLetters,
    setGameStarted,
    startGame,
    alphabet,
    guessLetter,
    wordState,
  };
};

export default useGlobalState;
