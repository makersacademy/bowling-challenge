'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let nextFrame;
  let nextNextFrame;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = new Frame();
    nextFrame = new Frame();
    nextNextFrame = new Frame();
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
      aNormalFrame(frame);
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.score).toContain(8);
    });
  });

  describe('#getScore', () => {
    it('returns the scores for each frame', () => {
      aNormalFrame(frame);
      addFrameAndSetRollsAndScore(frame);

      expect(scoreCard.getScore()).toContain(8);
    });
  });

  describe('#updateFrameScore', () => {
    describe('when a spare is followed by another frame', () => {
      it('updates the spare frame score with spare bonus', () => {
        aSpareFrame(frame);
        addFrameAndSetRollsAndScore(frame);
        aNormalFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScore()).toEqual([15, 8]);
      });
    });

    describe('when a strike is followed by a normal frame', () => {
      it('updates the strike frame with strike bonus', () => {
        aStrikeFrame(frame);
        addFrameAndSetRollsAndScore(frame);
        aNormalFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScore()).toEqual([18, 8]);
      });
    });

    describe('when a strike is followed by another strike frame', () => {
      it('updates the strike frame with strike bonus', () => {
        twoStrikesInARow(frame, nextFrame);

        scoreCard.updateFrameScore();

        aNormalFrame(nextNextFrame);
        addFrameAndSetRollsAndScore(nextNextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScore()).toEqual([25, 18, 8]);
      });
    });

    describe('when a strike is followed by two consecutive strikes', () => {
      it('updates the strike frame with strike bonus', () => {
        twoStrikesInARow(frame, nextFrame);

        scoreCard.updateFrameScore();

        aStrikeFrame(nextNextFrame);
        addFrameAndSetRollsAndScore(nextNextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScore()).toEqual([30, 20, 10]);
      });
    });
  });

  function addFrameAndSetRollsAndScore(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setRolls();
    scoreCard.setScore();
  }

  function aNormalFrame(frame) {
    let frameType = frame;
    frameType.roll(5);
    frameType.roll(3);
  }

  function aSpareFrame(frame) {
    let frameType = frame;
    frameType.roll(7);
    frameType.roll(3);
  }

  function aStrikeFrame(frame) {
    let frameType = frame;
    frameType.roll(10);
  }

  function twoStrikesInARow(frame, nextFrame) {
    aStrikeFrame(frame);
    addFrameAndSetRollsAndScore(frame);
    aStrikeFrame(nextFrame);
    addFrameAndSetRollsAndScore(nextFrame);
  }
});
