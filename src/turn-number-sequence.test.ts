import { TurnNumberSequence } from "./turn-number-sequence";

describe("given a TurnNumberSequence", () => {
  let sequence = new TurnNumberSequence();
  beforeEach(() => {
    sequence = new TurnNumberSequence();
  });

  it("should return a turn number", () => {
    expect(sequence.getNextNumber()).toEqual(expect.any(Number));
  });
  it("when called in sequence should return a consecutive numbers", () => {
    expect(sequence.getNextNumber()).toBe(0);
    expect(sequence.getNextNumber()).toBe(1);
    expect(sequence.getNextNumber()).toBe(2);
    expect(sequence.getNextNumber()).toBe(3);
  });
});
