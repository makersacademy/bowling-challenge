/*jshint esversion: 6 */

describe('Scorecard', () => {

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  describe('default state', () => {
    it('starts with score 0',() => {
      expect(scorecard._score).toEqual(0);
    });

    it('starts on frame 1',() => {
      expect(scorecard._frame).toEqual(1);
    });

    it('starts on roll 1',() => {
      expect(scorecard._rollNumber).toEqual(1);
    });

    it('starts with 10 pins up',() => {
      expect(scorecard._pinsDown).toEqual(0);
    });
  });

  describe('.displayScore', () => {
    it('displays the current score', () => {
      expect(scorecard.displayScore()).toEqual(0);
    });
  });

  describe('.roll', () => {
    it('adds the current roll to the frame', () => {
      scorecard.roll(2);
      scorecard.roll(5);
      expect(scorecard._score).toEqual(7);
    });

    it ('increases the rollNumber by 1', () => {
      scorecard.roll(3);
      expect(scorecard._rollNumber).toEqual(2);
    });
  });

  describe('._nextRoll', () => {
    it('changes the roll number to 2 if normal roll', () => {
      scorecard._nextRoll(6);
      expect(scorecard._rollNumber).toEqual(2);
    });

    it('keeps roll number as 1 if strike', () => {
      scorecard._nextRoll(10);
      expect(scorecard._rollNumber).toEqual(1);
    });

    it('changes the roll number to 1 if end of frame', () => {
      scorecard._nextRoll(3);
      scorecard._nextRoll(4);
      expect(scorecard._rollNumber).toEqual(1);
    });
  });
});
