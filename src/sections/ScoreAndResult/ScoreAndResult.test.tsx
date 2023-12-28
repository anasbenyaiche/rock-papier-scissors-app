import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { OptionProvider } from "../../context/optionsContext";
import ScoreAndResult from "./ScoreAndResult";
import ChooseAndPlay from "../ChooseAndPlay/ChooseAndPlay";

vi.mock("");

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
});
