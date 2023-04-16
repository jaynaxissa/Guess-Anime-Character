import React, { useState, useEffect } from "react";
import DisplayPicture from "./DisplayPicture";
import "./home.css";
import Guess from "./Guess";
import { animeCharacter } from "../characters";

const Home = () => {
  const [character, setCharacter] = useState({});

  const changeClue = () => {
    const randomIndex = Math.floor(Math.random() * animeCharacter.length);
    setCharacter(animeCharacter[randomIndex]);
  };

  useEffect(() => {
    changeClue();
  }, []);

  return (
    <div>
      <div className="home-container">
        <div className="game-section">
          <div className="game-title">Guessnime</div>
          <DisplayPicture selectedAnswer={character} />
          <Guess selectedAnswer={character} />
        </div>
      </div>
    </div>
  );
};

export default Home;
