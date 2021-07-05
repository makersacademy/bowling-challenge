const FinalFrame = require('../../public/js/finalFrame');

describe('FinalFrame', () => {
  let testFinalFrame = new FinalFrame();

  beforeEach(() => {
    testFinalFrame = new FinalFrame();
  });

  it('can keep track of up to three rolls', () => {
    testFinalFrame.setRollOne(5);
    testFinalFrame.setRollTwo(5);
    testFinalFrame.setRollThree(6);

    expect(testFinalFrame.getScore()).toBe(16);
  });

  it('prevents a player from entering a single score higher than 10 or lower than 0', () => {
    expect(() => { testFinalFrame.setRollOne(12); }).toThrowError(FinalFrame.INVALID_SCORE());
    expect(() => { testFinalFrame.setRollTwo(100); }).toThrowError(FinalFrame.INVALID_SCORE());
    expect(() => { testFinalFrame.setRollThree(-9); }).toThrowError(FinalFrame.INVALID_SCORE());
  });

  it('prevents a player from rolling a third time if they fail to bowl a strike or spare', () => {
    testFinalFrame.setRollOne(5);
    testFinalFrame.setRollTwo(4);

    expect(() => {
      testFinalFrame.setRollThree(2);
    }).toThrowError(FinalFrame.NO_MORE_ROLLS());
  });

  describe('a frame where the first roll is not a strike', () => {
    it('ensures the player can only input a score for roll two which completes a sum of at most 10', () => {
      testFinalFrame.setRollOne(6);

      expect(() => {
        testFinalFrame.setRollTwo(5);
      }).toThrowError(FinalFrame.INVALID_SCORE());
    });
  });

  describe('a frame where the first roll is a strike', () => {
    it('ensures the player can only input a scores for rolls two and three with a sum of at most 10', () => {
      testFinalFrame.setRollOne(10);
      testFinalFrame.setRollTwo(4);

      expect(() => {
        testFinalFrame.setRollThree(7);
      }).toThrowError(FinalFrame.INVALID_SCORE());
    });
  });

  it('does not award bonus points for strikes and spares', () => {
    const nearPerfectFinalFrame = new FinalFrame();

    nearPerfectFinalFrame.setRollOne(10);
    nearPerfectFinalFrame.setRollTwo(10);
    nearPerfectFinalFrame.setRollThree(8);

    expect(nearPerfectFinalFrame.getScore()).toBe(28);
  });
});
