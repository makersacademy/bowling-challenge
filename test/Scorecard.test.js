const Scorecard = require('../app/Scorecard');

beforeEach( () => {
  scorecard = new Scorecard();
});

describe('Scorecard class', () => {
  describe('frame attributes - before game', () => {
    it('to be default values before throw1', () => {
      expect(scorecard.frame1.score).toEqual(0);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(0);
      expect(scorecard.frame1.scoreThrow3).toEqual(0);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });
  });

  describe('frame attributes - during game', () => {
    it('1 frame, 2 throws, no spare', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(0);
      scorecard.throw2(1);
      scorecard.updateFrameScore(
        scorecard.frame1.scoreThrow1 + scorecard.frame1.scoreThrow2
      );
      scorecard.setFrameBonusType();

      expect(scorecard.currentFrame).toEqual(scorecard.frame1);
      expect(scorecard.frame1.score).toEqual(1);
      expect(scorecard.frame1.scoreThrow1).toEqual(0);
      expect(scorecard.frame1.scoreThrow2).toEqual(1);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(false);
    });

    it('1 frame, 2 throws, spare', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(5);
      scorecard.throw2(5);
      scorecard.updateFrameScore(
        scorecard.frame1.scoreThrow1 + scorecard.frame1.scoreThrow2
      );
      scorecard.setFrameBonusType();

      expect(scorecard.currentFrame).toEqual(scorecard.frame1);
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(5);
      expect(scorecard.frame1.scoreThrow2).toEqual(5);
      expect(scorecard.frame1.spare).toEqual(true);
      expect(scorecard.frame1.strike).toEqual(false);
    });

    it('1 frame, 1 throw, strike', () => {
      scorecard.setCurrentFrame(1);
      scorecard.throw1(10);
      scorecard.updateFrameScore(scorecard.frame1.scoreThrow1);
      scorecard.setFrameBonusType();

      expect(scorecard.currentFrame).toEqual(scorecard.frame1);
      expect(scorecard.frame1.score).toEqual(10);
      expect(scorecard.frame1.scoreThrow1).toEqual(10);
      expect(scorecard.frame1.spare).toEqual(false);
      expect(scorecard.frame1.strike).toEqual(true);
    });
  });
});
