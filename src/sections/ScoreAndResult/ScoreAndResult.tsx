import { useEffect, useState } from "react";
import ScoreCard from "../../components/ScoreCard";
import { useOptions } from "../../context/optionsContext";
import "./ScoreAndResult.scss";
import { OptionActionKind } from "../../reducers/scoreReducerTypes";
const ScoreAndResult = () => {
  const [timer, setTimer] = useState<number>(3);

  const optionsContext = useOptions();
  const {
    state: { runTimer },
    dispatch,
  } = optionsContext;

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
    }
  }, [timer]);

  return (
    <>
      <div className="score-container">
        <ScoreCard player="Anas" />
        <ScoreCard player="Computer" />
      </div>
      <div className="result">
        <div className="player-hand"></div>
        <div className="mid-col">
          {runTimer && (
            <p className="timer" data-testId="timer">
              {timer}
            </p>
          )}
        </div>
        <div className="computer-hand"></div>
      </div>
    </>
  );
};

export default ScoreAndResult;
