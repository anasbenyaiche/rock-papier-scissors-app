import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { scoreReducer } from "./scoreReducer";
import { useEffect, useReducer } from "react";
import { initialState } from "../context/initialValues";
import { ActionTypes, OptionActionKind } from "./scoreReducerTypes";

vi.mock("../context/initialValues.ts", () => {
  return {
    initialState: {
      playerHand: 0,
      computerHand: 0,
      runTimer: false,
      score: {
        player: 0,
        computer: 0,
      },
      results: {
        winner: "",
        message: "",
      },
    },
  };
});
interface IProps {
  myaction: ActionTypes;
}

const TestingComponent = (props: IProps) => {
  const [state, dispatch] = useReducer(scoreReducer, initialState);

  useEffect(() => {
    dispatch(props.myaction);
  }, []);

  return (
    <>
      <p>playerhand: '{state.playerHand}</p>
    </>
  );
};

describe("score reducer", () => {
  it("should update reducer player hand", () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.UPDATE_PLAYER_CHOICE, payload: 0 }}
      />
    );

    expect(screen.getByText(/playerhand: 2/)).toBeTruthy();
  });
  it("should update reducer computer hand", () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.UPDATE_COMPUTER_CHOICE, payload: 1 }}
      />
    );

    expect(screen.getByText(/playerhand: 2/)).toBeTruthy();
  });
  it("should update the score with the player one winning", () => {
    render(
      <TestingComponent
        myaction={{ type: OptionActionKind.PLAYER_WIN, payload: "Player win" }}
      />
    );
    screen.getByText(/winner is : Player /i);
  });
  it("should update the score with the computer one winning", () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.COMPUTER_WIN,
          payload: "Computer win",
        }}
      />
    );

    screen.getByText(/winner is : Computer /i);
  });
  it("should not update when it s a draw", () => {
    render(
      <TestingComponent
        myaction={{
          type: OptionActionKind.DRAW,
          payload: "Computer win",
        }}
      />
    );
    screen.getByText(/Draw /i);
  });
});
