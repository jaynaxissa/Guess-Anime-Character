import React, { useState, useEffect } from "react";
import DisplayPicture from "./DisplayPicture";
import "./home.css";
import Guess from "./Guess";
import { animeCharacter } from "../characters";

const Home = () => {
  const [character, setCharacter] = useState({});
  const [userAnswer, setUserAnswer] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  const wrongAnswer = userAnswer !== character.name;

  const changeClue = () => {
    const randomIndex = Math.floor(Math.random() * animeCharacter.length);
    setCharacter(animeCharacter[randomIndex]);
    setUserAnswer("");
    setButtonClick(false);
  };

  const handleAnswer = (e) => {
    setUserAnswer(e.target.value);
    setButtonClick(false);
  };

  const handleButtonClick = () => {
    setButtonClick(true);
  };

  useEffect(() => {
    changeClue();
  }, []);

  return (
    <div>
      <div className="home-container">
        <div className="game-section">
          <div className="layout-container">
            <div className="left">
              <div className="vertical-align">
                {buttonClick && wrongAnswer ? "❌ try again" : ""}
              </div>
            </div>

            <div className="middle">
              <div className="game-title">Guessnime</div>
              <DisplayPicture selectedAnswer={character} />
              <Guess
                selectedAnswer={character}
                userAnswer={userAnswer}
                handleAnswer={handleAnswer}
                handleButtonClick={handleButtonClick}
                changeClue={changeClue}
              />
            </div>

            <div className="right">
              <div className="vertical-align">
                {buttonClick && !wrongAnswer ? "✅ correct!" : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
