import { useEffect, useState } from "react";

import { alphabet } from "../static/alphabet";

const useGlobalState = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [word, setWord] = useState("");
  const [pickedLetters, setPickedLetters] = useState([]);
  const [wordState, setWordState] = useState("");
  const [wrongTries, setWrongTries] = useState(0);

  const startGame = () => {
    setGameStarted(true);
  };

  const guessLetter = (letter) => {
    setPickedLetters([...pickedLetters, letter]);
    if (!word.includes(letter)) {
      setWrongTries((wrongTries) => wrongTries + 1);
    }
  };
  console.log(wrongTries);
  useEffect(() => {
    fetch("https://random-word-api.herokuapp.com/word")
      .then((response) => response.json())
      .then((data) => setWord(data[0].toUpperCase()));
  }, []);

  useEffect(() => {
    const $wordState = word
      .split("")
      .map((letter) => (pickedLetters.indexOf(letter) >= 0 ? letter : "_"))
      .join("");
    setWordState($wordState);
  }, [pickedLetters, word, gameStarted]);

  return {
    gameStarted,
    pickedLetters,
    setPickedLetters,
    setGameStarted,
    startGame,
    alphabet,
    guessLetter,
    wordState,
    wrongTries,
  };
};

export default useGlobalState;
