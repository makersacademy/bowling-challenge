const Scorecard = require("./scorecard");
// const Frame = require('./frame');

describe("Scorecard", () => {
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  it("knows what the current frame is", () => {
    expect(scorecard.currentFrameNumber()).toBe(1);
  });
  it("knows what the current frame is after a frame is input", () => {
    scorecard.inputFrame([0, 5]);
    expect(scorecard.currentFrameNumber()).toBe(2);
  });
  it("knows when in final frame", () => {
    for (i = 1; i < 10; i++) {
      scorecard.inputFrame([10]); // 9 frames are input. So player is now in the final frame
    }
    expect(scorecard.currentFrameNumber()).toBe(10);
  });
  it("can calculate a perfect game", () => {
    for (i = 1; i < 10; i++) {
      scorecard.inputFrame([10]);
    }
    scorecard.inputFrame([10, 10, 10]);
    expect(scorecard.score()).toBe(300);
  });

  it("can calculate a gutter game", () => {
    for (i = 1; i < 11; i++) {
      scorecard.inputFrame([0]);
    }
    expect(scorecard.score()).toBe(0);
  });

  it("can calculate a game with spare in final frame", () => {
    for (i = 1; i < 10; i++) {
      scorecard.inputFrame([10]);
    }
    scorecard.inputFrame([5, 5, 5]);
    expect(scorecard.score()).toBe(270);
  });

  it("can calculate a game with spare in penultimate frame and strike in final frame", () => {
    for (i = 1; i < 9; i++) {
      scorecard.inputFrame([10]);
    }
    scorecard.inputFrame([5, 5]);
    scorecard.inputFrame([10, 10, 2]);
    expect(scorecard.score()).toBe(267);
  });

  it("can calculate a game with spare in penultimate frame and spare in final frame", () => {
    for (i = 1; i < 9; i++) {
      scorecard.inputFrame([10]);
    }
    scorecard.inputFrame([5, 5]);
    scorecard.inputFrame([5, 5, 2]);
    expect(scorecard.score()).toBe(252);
  });

  it("can calculate a no bonus game", () => {
    for (i = 1; i < 11; i++) {
      scorecard.inputFrame([3, 3]);
    }
    expect(scorecard.score()).toBe(60);
  });
});
