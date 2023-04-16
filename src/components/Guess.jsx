import React, { useState } from "react";
import { animeCharacter } from "../characters";
import "./guess.css";

const Guess = ({ selectedAnswer }) => {
  const [userGuess, setUserGuess] = useState("");

  const handleAnswer = (e) => {
    setUserGuess(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userGuess === selectedAnswer.name) {
      console.log("Right answer");
    } else {
      console.log("wrong answer");
    }
  };
  return (
    <div>
      <form>
        <input
          className="input-answer"
          type="text"
          placeholder="What's the name of this character?"
          onChange={handleAnswer}
          value={userGuess}
        />
      </form>
      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
};

export default Guess;
