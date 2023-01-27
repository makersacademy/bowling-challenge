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

  it("Adds up two frames together", () => {
    let frame2 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame3 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame1 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame4 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame5 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame6 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame7 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame8 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame9 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10] }
    let frame10 = { isStrike: () => true, isSpare: () => false, printFrame: () => [10, 10, 10] }
    let scorecard = new Scorecard
    scorecard.addFrame(frame1);
    scorecard.addFrame(frame2);
    scorecard.addFrame(frame3);
    scorecard.addFrame(frame4);
    scorecard.addFrame(frame5);
    scorecard.addFrame(frame6);
    scorecard.addFrame(frame7);
    scorecard.addFrame(frame8);
    scorecard.addFrame(frame9);
    scorecard.addFrame(frame10);
    expect(scorecard.calculate()).toEqual(300)
  })

  
})