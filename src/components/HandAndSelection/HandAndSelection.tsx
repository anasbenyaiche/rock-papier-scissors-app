import { useState } from "react";
import { useOptions } from '../../context/optionsContext';
import { OptionActionKind } from '../../reducers/scoreReducerTypes';
import './HandAndSelection.scss'

interface HandAndSelectionProps {
  name?: string;
  icon: JSX.Element;
  handChoiceIndex: number;
}


const HandAndSelection: React.FC<HandAndSelectionProps> = ({ name, icon, handChoiceIndex }) => {

  const { dispatch, state } = useOptions()
  const [handPressed, setHandPressed] = useState(false)
  const selectedHandIndex = state.playerHand

  const selectOption = (i: number) => {
    dispatch({ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: i })
    setHandPressed(true)
  }
  return (
    <>
      <button className={`choice-btn ${handPressed && handChoiceIndex === selectedHandIndex ? "active-choice" : ""}`}
        onClick={() => selectOption(handChoiceIndex)}>
        {name}
        {icon}
      </button>
    </>
  )
}

export default HandAndSelection