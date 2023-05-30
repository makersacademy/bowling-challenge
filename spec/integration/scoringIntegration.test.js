const {BowlingGame, BowlingScorecard, Frame} = require('../../lib/index');


let bowlingGame;
let scorecard;

describe('scoring integration', () => {
  describe('Frame and BowlingScorecard integration', () => {
    // resets scorecard to a new instance before each test
    beforeEach(() => {
      scorecard = new BowlingScorecard();
    });

    it('scores a regular roll', () => {
      const frameOne = new Frame();
      frameOne.addRoll(2);
      frameOne.addRoll(2);
      const testFrames = [frameOne];
      scorecard.setFramesToScore(testFrames);
      expect(scorecard.calculateTotalScore()).toBe(4);
    });

    it('scores a series of regular rolls', () => {
      // creates three regular frames
      const frameOne = new Frame();
      frameOne.addRoll(2);
      frameOne.addRoll(2);
      const frameTwo = new Frame();
      frameTwo.addRoll(0);
      frameTwo.addRoll(0);
      const frameThree = new Frame();
      frameThree.addRoll(2);
      frameThree.addRoll(2);
      // defines an array using the three frames
      const testFrames = [frameOne, frameTwo, frameThree];
      // passes array to scorecard
      scorecard.setFramesToScore(testFrames);

      expect(scorecard.calculateTotalScore()).toBe(8);
    });
  });

  describe('BowlingGame scoring integration', () => {
    // resets bowling game to a new instance before each test
    beforeEach(() => {
      bowlingGame = new BowlingGame();
    });

    it('scores a regular bowling game with no strikes or spares', () => {
      // 10 regular frames
      for (let i = 1; i <= 10; i++) {
        bowlingGame.addRollToFrame(2);
        bowlingGame.addRollToFrame(2);
        bowlingGame.checkFrameEnd();
      }
      expect(bowlingGame.getTotalScore()).toBe(40);
    });
  });
});
