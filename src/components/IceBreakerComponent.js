import React, { useEffect } from "react";
import { icebreakers } from "../mock-data";
import "../styles/icebreakers.css";

export default function IceBreakerComponent() {
  const game = icebreakers;

  var shuffled = game[0].content.sort(function () {
    return 0.5 - Math.random();
  });

  const newList = shuffled.slice(0, 5);

  useEffect(() => {
    console.log(game);
    console.log(newList);
  });
  return (
    <div className="icebreaker-container">
      <div>
        <h3>{game[0].name}</h3>
      </div>
      <div>
        <p>{game[0].description}</p>
      </div>
      <div className="questions-container">
        <div className="left-side">
          <ol>
            {newList.map((question) => {
              return <li className="list-items">{question}</li>;
            })}
          </ol>
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
}
