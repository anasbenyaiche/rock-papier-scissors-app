import React from "react";

interface ScoreCard {
  player?: string;
}

const ScoreCard: React.FC<ScoreCard> = ({ player }) => {
  return (
    <div className="score">
      <h3>Score</h3>
      <p>{player}</p>
    </div>
  );
};

export default ScoreCard;
