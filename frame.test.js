const Frame = require("./frame");

beforeEach(() => {
  frame = new Frame();
});

describe("Frame", () => {
  it("initially returns a score of 0", () => {
    expect(frame.frameScore()).toEqual(0);
  });

  it("scores a single frame with no pins knocked down", () => {
    frame.roll(0);
    frame.roll(0);
    expect(frame.frameScore()).toEqual(0);
  });

  it("scores a single frame with no spares or strikes", () => {
    frame.roll(6);
    frame.roll(2);
    expect(frame.frameScore()).toEqual(8);
  });

  it("recognizes a strike", () => {
    frame.roll(10);
    expect(frame.isStrike()).toEqual(true);
    expect(frame.frameScore()).toEqual(0);
  });

  it("recognizes a spare", () => {
    frame.roll(6);
    frame.roll(4);
    expect(frame.isSpare()).toEqual(true);
    expect(frame.frameScore()).toEqual(0);
  });

  /*
  it("scores a gutter game after 10 frames", () => {
    for (let i = 0; i < 10; i++) {
      bowling.rolls(0, 0);
    }
    expect(bowling.totalScore()).toEqual(0);
  });

  it("scores 10 frames with no strikes or spares", () => {
    for (let i = 0; i < 10; i++) {
      bowling.rolls(4, 4);
    }
    expect(bowling.totalScore()).toEqual(80);
  });

   */
});
