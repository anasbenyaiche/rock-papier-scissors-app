export enum OptionActionKind {
  UPDATE_PLAYER_CHOICE = "UPDATE_PLAYER_CHOICE",
  UPDATE_COMPUTER_CHOICE = "UPDATE_COMPUTER_CHOICE",
  RUN_TIMER = "RUN_TIMER",
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

export type ActionTypes = UpdatePlayerChoice | UpdateComputerChoice | RunTimer;
