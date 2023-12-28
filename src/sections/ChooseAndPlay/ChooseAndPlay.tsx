import HandAndSelection from "../../components/HandAndSelection/HandAndSelection";
import { useOptions } from "../../context/optionsContext";
import { OptionActionKind } from "../../reducers/scoreReducerTypes";
import { generateRandomNumber } from "../../utils/randomNumber";
import "./ChooseAndPlay.scss";

const ChooseAndPlay = () => {
  const { dispatch, options } = useOptions();

  const play = () => {
    const randomNumber = generateRandomNumber();
    dispatch({
      type: OptionActionKind.UPDATE_COMPUTER_CHOICE,
      payload: randomNumber,
    });
    dispatch({
      type: OptionActionKind.RUN_TIMER,
      payload: true,
    });
  };
  return (
    <>
      <div className="choice-btn-container">
        {options.map((option, i) => (
          <HandAndSelection
            key={option.name}
            name={option.name}
            icon={option.icon}
            handChoiceIndex={i}
          />
        ))}
      </div>
      <button className="play-button" onClick={play}>
        Play
      </button>
    </>
  );
};

export default ChooseAndPlay;
