import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { OptionProvider } from "../../context/optionsContext";
import ScoreAndResult from "./ScoreAndResult";
import ChooseAndPlay from "../ChooseAndPlay/ChooseAndPlay";

vi.mock("../../utils", () => ({
  generateRandomNumber: () => 0,
}));

describe("score and results", () => {
  it("should display 2 seconds on the screen after we wait fpr 1 second", () => {
    vi.useFakeTimers();
    render(
      <OptionProvider>
        <ScoreAndResult />
        <ChooseAndPlay />
      </OptionProvider>
    );
    const hand = screen.getByText(/paper/i);
    const play = screen.getByText(/Play/i);
    expect(hand).toBeTruthy();

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => vi.advanceTimersByTime(1000));

    screen.debug();

    expect(screen.getByTestId("timer")).toBe(2);
  });
  it("should display the player winner ", () => {
    vi.useFakeTimers();
    render(
      <OptionProvider>
        <ScoreAndResult />
        <ChooseAndPlay />
      </OptionProvider>
    );
    const hand = screen.getByText(/paper/i);
    const play = screen.getByText(/Play/i);
    expect(hand).toBeTruthy();

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => vi.advanceTimersByTime(1000));

    screen.debug();

    expect(screen.getByText(/winner player/i)).toBe(true);
    expect(screen.getByText(/Player one win/i)).toBe(true);
  });

  it("should display the Computer winner ", () => {
    vi.useFakeTimers();
    render(
      <OptionProvider>
        <ScoreAndResult />
        <ChooseAndPlay />
      </OptionProvider>
    );
    const hand = screen.getByText(/scissors/i);
    const play = screen.getByText(/computer/i);
    expect(hand).toBeTruthy();

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => vi.advanceTimersByTime(1000));

    screen.debug();

    expect(screen.getByText(/winner computer/i)).toBe(true);
    expect(screen.getByText(/Player one win/i)).toBe(true);
  });
  it("should display the Computer winner ", () => {
    vi.useFakeTimers();
    render(
      <OptionProvider>
        <ScoreAndResult />
        <ChooseAndPlay />
      </OptionProvider>
    );
    const hand = screen.getByText(/scissors/i);
    const play = screen.getByText(/computer/i);
    expect(hand).toBeTruthy();

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => vi.advanceTimersByTime(1000));

    screen.debug();
  });
  it("should hand shaking animation while played round ", () => {
    vi.useFakeTimers();
    render(
      <OptionProvider>
        <ScoreAndResult />
        <ChooseAndPlay />
      </OptionProvider>
    );

    const hand = screen.getByText(/scissors/i);
    const play = screen.getByText(/computer/i);
    expect(hand).toBeTruthy();

    fireEvent.click(hand);
    fireEvent.click(play);

    act(() => vi.advanceTimersByTime(3000));
    const playerShake = screen.getByTestId("player-shake");
    const computerShake = screen.getByTestId("player-shake");
    screen.debug();

    expect(playerShake).toBeCalled();
    expect(computerShake).toBeCalled();
  });
});
