import React, { useEffect, useState } from "react";
import { icebreakers, roulette, crazy, funFact } from "../mock-data";
import "../styles/game-component.css";
import IceBreakerComponent from "./IceBreakerComponent";

export default function GameComponent() {
  const gameOne = icebreakers;
  const gameTwo = roulette;
  const gameThree = funFact;
  const gameFour = crazy;
  const [selectedGame, setSelectedGame] = useState();

  const handleSelectedGame = (e) => {
    setSelectedGame(e.target.value);
  };
  const gameList = ["Icebreakers", "Roulette", "FunFact", "CrazyGame"];

  useEffect(() => {
    console.log(gameOne);
    console.log(gameTwo);
    console.log(selectedGame);
  });
  return (
    <div className="game-container">
      <div className="game-selection-container">
        <select value={selectedGame} onChange={handleSelectedGame}>
          <option>games</option>
          {gameList.map((game, index) => {
            return (
              <option key={index} value={game}>
                {game}
              </option>
            );
          })}
        </select>
      </div>
      <div className="game-map-container">
        {selectedGame === gameList[0] ? (
          <IceBreakerComponent theGame={selectedGame} />
        ) : null}
      </div>
    </div>
  );
}
