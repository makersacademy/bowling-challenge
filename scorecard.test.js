const Scorecard = require('./scorecard');

describe("Scorecard", () => {
  it("Adds up two frames together", () => {
    let frame1 = { isStrike: () => false, isSpare: () => false, printFrame: () => [7, 1] }
    let frame2 = { isStrike: () => false, isSpare: () => false, printFrame: () => [2, 1] }
    let scorecard = new Scorecard
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    expect(scorecard.calculate()).toEqual(11)
  })
})