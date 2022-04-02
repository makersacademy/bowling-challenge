const BowlingScore = require("./bowlingScore.js");

describe("BowlingScore", () => {
  // it("says hello world", () => {
  //   const logSpy = jest.spyOn(console, "log");
  //   const score = new BowlingScore();
  //   score.helloWorld();
  //   expect(logSpy).toHaveBeenCalledWith("Hello World");
  // });

  it("adds a score", () => {
    const score = new BowlingScore();
    score.addScore(5);
    expect(score.getTotalScore()).toBe(5);
  });

  it("adds scores to the correct frames", () => {
    const score = new BowlingScore();
    score.addScore(5);
    score.addScore(4);
    score.addScore(6);
    expect(score.getFrameScore(1)).toBe(9);
    expect(score.getFrameScore(2)).toBe(6);
  });

  describe("adds bonus rolls to frames", () => {
    it("when a strike is scored two bonus rolls are added", () => {
      const score = new BowlingScore();
      score.addScore(10);
      expect(score.getFrameScore(1)).toBe(10);
      score.addScore(6);
      score.addScore(3);
      expect(score.getFrameScore(2)).toBe(9);
      expect(score.getFrameScore(1)).toBe(19);
    });
    it("when a spare is scored one bonus roll is added", () => {
      const score = new BowlingScore();
      score.addScore(5);
      score.addScore(5);
      expect(score.getFrameScore(1)).toBe(10);
      score.addScore(6);
      expect(score.getFrameScore(2)).toBe(6);
      expect(score.getFrameScore(1)).toBe(16);
    });
    it("doesn't add any to normal frames", () => {
      const score = new BowlingScore();
      score.addScore(5);
      score.addScore(4);
      expect(score.getFrameScore(1)).toBe(9);
      score.addScore(6);
      expect(score.getFrameScore(2)).toBe(6);
      expect(score.getFrameScore(1)).toBe(9);
    });
  });
});
