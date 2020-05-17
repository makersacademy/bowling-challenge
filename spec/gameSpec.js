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

  describe('#setScores', () => {
    it('can keep track of the score for a normal frame', () => {
      scoreCard.addToFrames(frame);

      expect(scoreCard.setScores()).toContain(frame.total());
    });
  });
});
