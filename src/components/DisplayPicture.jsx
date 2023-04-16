import React, { useEffect, useState } from "react";
import { animeCharacter } from "../characters";
import "./displayPicture.css";

const DisplayPicture = ({ selectedAnswer }) => {
  return (
    <div className="clue-picture-container">
      <img className="clue-picture" src={selectedAnswer.image} alt="" />
    </div>
  );
};

export default DisplayPicture;
