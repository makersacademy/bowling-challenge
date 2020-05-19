'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let nextFrame;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = new Frame();
    nextFrame = new Frame();
  });

  it('holds game frames in an array', () => {
    expect(scoreCard.frames).toBeInstanceOf(Array);
  });

  describe('#addToFrames', () => {
    it('can add a new frame to frames array', () => {
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.frames).toContain(frame);
    });
  });

  describe('#setRolls', () => {
    it('can keep track of the rolls for each frame', () => {
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.gameRolls).toContain(frame.rolls);
    });
  });

  describe('#setScore', () => {
    it('keeps track of the frames scores', () => {
      aNormalFrame();
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.score).toContain(8);
    });
  });

  describe('#getScore', () => {
    it('returns the scores for each frame', () => {
      aNormalFrame();
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.getScore()).toContain(8);
    });
  });

  describe('#updateFrameScore', () => {
    describe('when a spare frame is followed by a normal frame', () => {
      it('updates the previous frame with spare bonus', () => {
        frame.roll(7);
        frame.roll(3);
        addFrameAndSetRollsAndScore(frame);
        nextFrame.roll(5);
        nextFrame.roll(3);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScore()).toEqual([15, 8]);
      });
    });
  });

  function addFrameAndSetRollsAndScore(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setRolls();
    scoreCard.setScore();
  }

  function aNormalFrame() {
    frame.roll(5);
    frame.roll(3);
  }
});
