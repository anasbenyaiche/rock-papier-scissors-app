import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import HandAndSelection from "./HandAndSelection";
import { FaHandPaper } from "react-icons/fa";
import userEvent from "@testing-library/user-event";
import { OptionProvider } from "../../context/optionsContext";

vi.mock("./HandAndSelection.scss", () => {
  return {
    default: {
      choiceBtn: "choice-btn",
      activeChoice: "active-choice",
    },
  };
});

describe("Hand selection", () => {
  it("should render the hand selection component with the right props", () => {
    render(
      <HandAndSelection
        name="hand1"
        icon={<FaHandPaper data-testid="paper" size={60} />}
        handChoiceIndex={0}
      />
    );

    const hand = screen.getByText(/paper/i);
    const icon = screen.getByTestId("paper");

    expect(hand).toBeInTheDocument();
    expect(icon).toBeVisisble();
  });

  it("should render the hand selection component with the right props", () => {
    const user = userEvent.setup();

    render(
      <OptionProvider>
        <HandAndSelection
          name="hand1"
          icon={<FaHandPaper data-testid="paper" size={60} />}
          handChoiceIndex={0}
        />
      </OptionProvider>
    );

    const hand = screen.getByText(/paper/i);

    user.click(hand);

    expect(hand).toHaveClass("active-choice");
  });
});
