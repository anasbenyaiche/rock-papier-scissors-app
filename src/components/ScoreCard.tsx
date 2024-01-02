import React from "react";

interface ScoreCard {
  player?: string;
  score?: number;
}

const ScoreCard: React.FC<ScoreCard> = ({ player, score }) => {
  return (
    <div className="score">
      <h3>Score: {score} </h3>
      <p>{player}</p>
    </div>
  );
};

export default ScoreCard;
