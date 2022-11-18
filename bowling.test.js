const Bowling = require("./bowling");

beforeEach(() => {
  bowling = new Bowling();
});

describe("Bowling", () => {
  it("initially returns a score of 0", () => {
    expect(bowling.totalScore()).toEqual(0);
  });

  it("scores a single frame with no spares or strikes", () => {
    bowling.roll(6);
    bowling.roll(2);
    expect(bowling.totalScore()).toEqual(8);
  });

  it("scores a gutter game after 10 frames", () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.totalScore()).toEqual(0);
  });
});
