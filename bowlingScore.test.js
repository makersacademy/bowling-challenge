const BowlingScore = require("./bowlingScore.js");

describe("BowlingScore", () => {
  it("says hello world", () => {
    const logSpy = jest.spyOn(console, "log");
    const score = new BowlingScore();
    score.helloWorld();
    expect(logSpy).toHaveBeenCalledWith("Hello World");
  });
});
