import { describe, expect, it } from "vitest";
import { generateRandomNumber } from "./randomNumber";

describe("random number ", () => {
  it("it should generate a random numbre from 1 to 3");
  const randomNumber = generateRandomNumber();
  expect(randomNumber).toBeLessThanOrEqual(2);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
});
