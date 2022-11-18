const Bowling = require("./bowling");

beforeEach(() => {
  bowling = new Bowling();
});

describe("Bowling", () => {
  it("initially returns a score of 0", () => {
    expect(bowling.totalScore()).toEqual(0);
  });
});
