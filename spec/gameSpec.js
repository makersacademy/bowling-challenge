'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let nextFrame;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = jasmine.createSpyObj(Frame, ['total', 'setRolls']);
    nextFrame = jasmine.createSpyObj(Frame, ['setRolls']);
  });

  it('holds game frames in an array', () => {
    expect(scoreCard.frames).toBeInstanceOf(Array);
  });

  describe('#addToFrames', () => {
    it('can add a new frame to frames array', () => {
      scoreCard.addToFrames(frame);

      expect(scoreCard.frames).toContain(frame);
    });
  });

  describe('#setScore', () => {
    it('can keep track of the score for each frame', () => {
      scoreCard.addToFrames(frame);
      scoreCard.setScore();

      expect(scoreCard.scores).toContain(frame.total());
    });
  });

  describe('#getScores', () => {
    it('returns the scores for each frame', () => {
      scoreCard.addToFrames(frame);
      scoreCard.setScore();

      expect(scoreCard.getScores()).toContain(frame.total());
    });
  });
});
