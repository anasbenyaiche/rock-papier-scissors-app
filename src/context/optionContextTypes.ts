import { ActionTypes } from "../reducers/scoreReducerTypes";

export enum HandOption {
  rock = "rock",
  papier = "papier",
  scissors = "scissors",
}

export interface IOptions {
  name: HandOption;
  icon: JSX.Element;
}

export interface IOptionContext {
  options: IOptions[];
  state: IInitialState;
  dispatch: React.Dispatch<ActionTypes>;
}

export interface OptionsContextProps {
  children: React.ReactNode;
}
export interface IScore {
  player: number;
  computer: number;
}
export interface IResults {
  winner: string;
  message: string;
}

export interface IInitialState {
  playerHand: number;
  computerHand: number;
  runTimer: boolean;
  score: IScore;
  results: IResults;
}
