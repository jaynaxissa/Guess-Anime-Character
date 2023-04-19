import React, { useState } from "react";
import { animeCharacter } from "../characters";
import "./guess.css";

const Guess = ({
  selectedAnswer,
  userAnswer,
  handleAnswer,
  handleButtonClick,
  changeClue,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleButtonClick();

    if (userAnswer === selectedAnswer.name) {
    } else {
      console.log("wrong answer");
    }
  };
  return (
    <div className="guess-input">
     
      <form>
        <input
          className="input-answer"
          type="text"
          placeholder="What's the name of this character?"
          onChange={handleAnswer}
          value={userAnswer}
        />
      </form>
      <button className="submit-button" onClick={handleSubmit}>
        ENTER
      </button>
    </div>
  );
};

export default Guess;
