import { useEffect, useState } from "react";
import ScoreCard from "../../components/ScoreCard";
import { useOptions } from "../../context/optionsContext";
import "./ScoreAndResult.scss";
import { OptionActionKind } from "../../reducers/scoreReducerTypes";
import { checkWinner } from "../../utils/checkWinner";
const ScoreAndResult = () => {
  const [timer, setTimer] = useState<number>(3);

  const optionsContext = useOptions();
  const {
    options,
    state: {
      runTimer,
      playerHand,
      score,
      results: { winner, message },
      computerHand,
    },
    dispatch,
  } = optionsContext;

  const playerHandIndex = playerHand;
  const playerhandName = options[playerHandIndex].name;
  const playerhandIcon = options[playerHandIndex].icon;
  const playerScore = score.player;

  const computerHandIndex = computerHand;
  const computerhandName = options[computerHandIndex].name;
  const computerhandIcon = options[computerHandIndex].icon;
  const computerScore = score.computer;

  useEffect(() => {
    if (runTimer) {
      const newIntervalId = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(newIntervalId);
          }
          return prev - 1;
        });
      }, 1000);
    }
  }, [runTimer]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(3);
      dispatch({ type: OptionActionKind.RUN_TIMER, payload: false });
      checkWinner(dispatch, playerhandName, computerhandName);
    }
  }, [computerhandName, dispatch, playerhandName, timer]);

  return (
    <>
      <div className="score-container">
        <ScoreCard player="Anas" score={playerScore} />
        <ScoreCard player="Computer" score={computerScore} />
      </div>
      <div className="result">
        <div className={`${winner === "Player" ? "winner" : ""} player-hand`}>
          {runTimer && (
            <div data-testid="computer" className="shaking-hands">
              {options[0].icon}
            </div>
          )}

          {!runTimer && winner && (
            <>
              <div> {playerhandIcon}</div>
              <div>{playerhandName}</div>
            </>
          )}
        </div>
        <div className="mid-col">
          {runTimer && (
            <p className="timer" data-testid="timer">
              {timer}
            </p>
          )}
          <div>
            {!runTimer && winner && (
              <>
                <h2>{winner} wins </h2>
                <p>{message} </p>
              </>
            )}
          </div>
        </div>
        <div
          className={`${winner === "Computer" ? "winner" : ""} computer-hand`}
        >
          {runTimer && (
            <div data-testid="computer" className="computer-shaking-hands">
              {options[0].icon}
            </div>
          )}
          {!runTimer && winner && (
            <>
              <div> {computerhandIcon}</div>
              <div>{computerhandName} </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ScoreAndResult;
