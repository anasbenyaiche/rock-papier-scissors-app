import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { useOptions, OptionProvider } from "./optionsContext";

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

const TestingComponent = () => {
  const optionsContext = useOptions();
  return (
    <>
      <p>Playerhand: {optionsContext.state.playerHand}</p>
      <p>computerhand: {optionsContext.state.computerHand}</p>
      <p>winner score: {optionsContext.state.results.winner}</p>
    </>
  );
};

describe("Option context", () => {
  it("should render the component with the initial Values", () => {
    render(
      <OptionProvider>
        <TestingComponent />
      </OptionProvider>
    );
  });
  expect(screen.getByText(/playerhand: 1/i)).toBeInTheDocument();
  expect(screen.getByText(/computerhand: 2/i)).toBeInTheDocument();
  expect(screen.getByText(/winner: computer/i)).toBeInTheDocument();
});
