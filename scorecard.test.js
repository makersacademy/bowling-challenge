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

  it("Adds up a perfect game", () => {
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

  it("Adds up a game of all spares", () => {
    let frame1 = { isStrike: () => false, isSpare: () => true, printFrame: () => [2, 8] }
    let frame2 = { isStrike: () => false, isSpare: () => true, printFrame: () => [1, 9] }
    let frame3 = { isStrike: () => false, isSpare: () => true, printFrame: () => [3, 7] }
    let frame4 = { isStrike: () => false, isSpare: () => true, printFrame: () => [4, 6] }
    let frame5 = { isStrike: () => false, isSpare: () => true, printFrame: () => [5, 5] }
    let frame6 = { isStrike: () => false, isSpare: () => true, printFrame: () => [9, 1] }
    let frame7 = { isStrike: () => false, isSpare: () => true, printFrame: () => [8, 2] }
    let frame8 = { isStrike: () => false, isSpare: () => true, printFrame: () => [3, 7] }
    let frame9 = { isStrike: () => false, isSpare: () => true, printFrame: () => [4, 6] }
    let frame10 = { isStrike: () => false, isSpare: () => true, printFrame: () => [5, 5, 10] }
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
    expect(scorecard.calculate()).toEqual(152)
  })

  

  
})