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

    it('can only track of 10 frames score', () => {
      for (let i = 0; i < 10; i++) {
        let newFrame = new Frame();
        newFrame.roll(5);
        newFrame.roll(3);
        addFrameAndSetRollsAndScore(newFrame);
      }

      aSpareFrame(nextFrame);
      addFrameAndSetRollsAndScore(nextFrame);

      expect(scoreCard.score.length).toEqual(10);
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

        expect(scoreCard.score).toEqual([15, 8]);
      });
    });

    describe('when a strike is followed by a normal frame', () => {
      it('updates the strike frame with strike bonus', () => {
        aStrikeFrame(frame);
        addFrameAndSetRollsAndScore(frame);
        aNormalFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.score).toEqual([18, 8]);
      });
    });

    describe('when a strike is followed by another strike frame', () => {
      it('updates the strike frame with strike bonus', () => {
        twoStrikesInARow(frame, nextFrame);

        scoreCard.updateFrameScore();

        aNormalFrame(nextNextFrame);
        addFrameAndSetRollsAndScore(nextNextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.score).toEqual([25, 18, 8]);
      });
    });

    describe('when a strike is followed by two consecutive strikes', () => {
      it('updates the strike frame with strike bonus', () => {
        twoStrikesInARow(frame, nextFrame);

        scoreCard.updateFrameScore();

        aStrikeFrame(nextNextFrame);
        addFrameAndSetRollsAndScore(nextNextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.score).toEqual([30, 20, 10]);
      });
    });
  });

  describe('#update10thFrame', () => {
    describe('when 10th frame ends with a spare', () => {
      it('keeps the correct score', () => {
        nineNormalFrames();

        aSpareFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        nextNextFrame.roll(5);
        addFrameAndSetRollsAndScore(nextNextFrame);

        scoreCard.update10thFrame();

        expect(scoreCard.score).toEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 15]);
      });
    });

    describe('when 10th frame ends with a strike', () => {
      it('keeps the correct score', () => {
        let bonus1 = new Frame();
        let bonus2 = new Frame();

        nineNormalFrames();

        aStrikeFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        bonus1.roll(5);
        addFrameAndSetRollsAndScore(bonus1);

        bonus2.roll(3);
        addFrameAndSetRollsAndScore(bonus2);

        scoreCard.update10thFrame();

        expect(scoreCard.score).toEqual([8, 8, 8, 8, 8, 8, 8, 8, 8, 18]);
      });
    });
  });

  describe('#runningTotal', () => {
    describe('when a normal frame by another normal frame', () => {
      it('keeps a corect running total of the game', () => {
        aNormalFrame(frame);
        addFrameAndSetRollsAndScore(frame);

        scoreCard.runningTotal();

        aNormalFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.runningTotal();

        expect(scoreCard.runner).toEqual([8, 16]);
      });
    });

    describe('when a normal frame is followed by a strike frame, followed by a normal frame', () => {
      it('keeps a corect running total of the game', () => {
        aNormalFrame(frame);
        addFrameAndSetRollsAndScore(frame);

        scoreCard.runningTotal();

        aStrikeFrame(nextFrame);
        addFrameAndSetRollsAndScore(nextFrame);

        scoreCard.runningTotal();

        aNormalFrame(nextNextFrame);
        addFrameAndSetRollsAndScore(nextNextFrame);
        scoreCard.updateFrameScore();

        scoreCard.runningTotal();

        expect(scoreCard.runner).toEqual([8, 26, 34]);
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

  function nineNormalFrames() {
    for (let i = 0; i < 9; i++) {
      let newFrame = new Frame();
      newFrame.roll(5);
      newFrame.roll(3);
      addFrameAndSetRollsAndScore(newFrame);
    }
  }
});
