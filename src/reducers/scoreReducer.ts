import { IInitialState } from "../context/optionContextTypes";
import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";

export const scoreReducer = (state: IInitialState, action: ActionTypes) => {
  const { type, payload } = action;

  const {
    UPDATE_COMPUTER_CHOICE,
    UPDATE_PLAYER_CHOICE,
    RUN_TIMER,
    DRAW,
    COMPUTER_WIN,
    PLAYER_WIN,
  } = OptionActionKind;

  switch (type) {
    case UPDATE_PLAYER_CHOICE:
      return {
        ...state,
        playerHand: payload,
      };
    case UPDATE_COMPUTER_CHOICE:
      return {
        ...state,
        computerHand: payload,
      };
    case RUN_TIMER:
      return {
        ...state,
        runTimer: payload,
      };
    case DRAW:
      return {
        ...state,
        results: {
          winner: "No one",
          message: payload,
        },
      };
    case COMPUTER_WIN:
      return {
        ...state,
        score: { ...state.score, computer: state.score.computer + 1 },
        results: {
          winner: "Computer",
          message: payload,
        },
      };
    case PLAYER_WIN:
      return {
        ...state,
        score: { ...state.score, player: state.score.player + 1 },
        results: {
          winner: "Player",
          message: payload,
        },
      };
    default:
      return {
        ...state,
        results: {
          winner: "error",
          message: "we have an error",
        },
      };
  }
};
