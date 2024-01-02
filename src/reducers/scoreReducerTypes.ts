export enum OptionActionKind {
  UPDATE_PLAYER_CHOICE = "UPDATE_PLAYER_CHOICE",
  UPDATE_COMPUTER_CHOICE = "UPDATE_COMPUTER_CHOICE",
  RUN_TIMER = "RUN_TIMER",
  DRAW = "DRAW",
  COMPUTER_WIN = "COMPUTER_WIN",
  PLAYER_WIN = "PLAYER_WIN",
}

export interface UpdatePlayerChoice {
  type: OptionActionKind.UPDATE_PLAYER_CHOICE;
  payload: number;
}

export interface UpdateComputerChoice {
  type: OptionActionKind.UPDATE_COMPUTER_CHOICE;
  payload: number;
}
export interface RunTimer {
  type: OptionActionKind.RUN_TIMER;
  payload: boolean;
}

export interface Draw {
  type: OptionActionKind.DRAW;
  payload: string;
}
export interface PlayerWins {
  type: OptionActionKind.PLAYER_WIN;
  payload: string;
}
export interface ComputerWins {
  type: OptionActionKind.COMPUTER_WIN;
  payload: string;
}

export type ActionTypes =
  | UpdatePlayerChoice
  | UpdateComputerChoice
  | RunTimer
  | Draw
  | PlayerWins
  | ComputerWins;
