import React from "react";
import { ActionTypes, OptionActionKind } from "../reducers/scoreReducerTypes";

export const checkWinner = (
  dispatch: React.Dispatch<ActionTypes>,
  playerHand: string,
  computerHand: string
) => {
  console.log(playerHand, computerHand);
  // Rock
  if (playerHand === "rock" && computerHand === "rock") {
    dispatch({ type: OptionActionKind.DRAW, payload: "We have a draw" });
  } else if (playerHand === "rock" && computerHand === "papier") {
    dispatch({
      type: OptionActionKind.COMPUTER_WIN,
      payload: "Computer Wins, papier beats the rock ",
    });
  } else if (playerHand === "rock" && computerHand === "scissors") {
    dispatch({
      type: OptionActionKind.PLAYER_WIN,
      payload: "Player Wins, Rock beats the Scissors",
    });
  }
  // papier
  else if (playerHand === "papier" && computerHand === "rock") {
    dispatch({
      type: OptionActionKind.COMPUTER_WIN,
      payload: "Player Wins, rock beats the papier ",
    });
  } else if (playerHand === "papier" && computerHand === "papier") {
    dispatch({ type: OptionActionKind.DRAW, payload: "We have a draw " });
  } else if (playerHand === "papier" && computerHand === "scissors") {
    dispatch({
      type: OptionActionKind.COMPUTER_WIN,
      payload: "Computer Wins,scissors beats the papier",
    });
  }
  // Scissors
  else if (playerHand === "scissors" && computerHand === "rock") {
    dispatch({
      type: OptionActionKind.COMPUTER_WIN,
      payload: "Computer Wins, rock beat the Scissors ",
    });
  } else if (playerHand === "scissors" && computerHand === "papier") {
    dispatch({
      type: OptionActionKind.PLAYER_WIN,
      payload: "Player Wins,Scissors beats the papier",
    });
  } else if (playerHand === "scissors" && computerHand === "scissors") {
    dispatch({ type: OptionActionKind.DRAW, payload: "We have a draw " });
  }
};
