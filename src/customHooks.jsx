import { useState, useEffect, useRef } from "react";

const customHooks = () => {
  const textAreaRef = useRef();
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isGameOn, setIsGameOn] = useState(false);
  const [lightMode, setLightMode] = useState(true)

  const toggleLightMode = () => {
    setLightMode(prevMode => !prevMode)
  }

  const updateText = (event) => {
    const { value } = event.target;
    setText(value);
  };

  const increment = () => {
    setTimeRemaining((prevTime) => prevTime + 1);
  };

  const decrement = () => {
    setTimeRemaining((prevTime) => prevTime - 1);
  };

  const startGame = () => {
    setIsGameOn(true);

    setText(" ");
    textAreaRef.current.disabled = false;
    textAreaRef.current.focus();
  };

  useEffect(() => {
    if (isGameOn && timeRemaining >= 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
    } else if (timeRemaining < 0) {
      setTimeRemaining(0);
      setIsGameOn(false);
      setWordCount(countWords(text));
    }
  }, [isGameOn, timeRemaining]);

  const countWords = (text) => {
    const words = text.trim().split(" ");
    return words.filter((word) => word !== "").length;
  };

  return {
    textAreaRef,
    timeRemaining,
    text,
    wordCount,
    isGameOn,
    updateText,
    startGame,
    countWords,
    increment,
    decrement,
    lightMode,
    toggleLightMode
  };
};

export default customHooks;
