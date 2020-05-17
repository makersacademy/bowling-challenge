'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let nextFrame;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'setRolls']);
    nextFrame = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'setRolls']);
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
      addFrameAndSetScore(frame);

      expect(scoreCard.scores).toContain(frame.total());
    });
  });

  describe('#getScores', () => {
    it('returns the scores for each frame', () => {
      addFrameAndSetScore(frame);

      expect(scoreCard.getScores()).toContain(frame.total());
    });
  });

  describe('#updateFrameScore', () => {
    describe('when a strike frame is followed by a normal frame', () => {
      it('updates the previous frame with strike bonus', () => {
        frame.setRolls.withArgs(10);
        frame.total.and.returnValue(10);
        addFrameAndSetScore(frame);
        nextFrame.setRolls.withArgs(5);
        nextFrame.setRolls.withArgs(2);
        nextFrame.total.and.returnValue(7);
        addFrameAndSetScore(nextFrame);

        scoreCard.updateFrameScore();

        expect(scoreCard.getScores()).toEqual([17, 7]);
      });
    });

    // describe('when a strike frame is followed by another strike frame', () => {
    //   it('updates the previous frame with the correct bonus', () => {
    //     let nextNextFrame = jasmine.createSpyObj(Frame, ['total', 'getRolls']);
    //
    //     frame.total.and.returnValue(10);
    //     // nextFrame.getRolls.and.returnValue([10]);
    //     nextFrame.total.and.returnValue(10);
    //     // nextFrame.getRolls.and.returnValue([5, 2]);
    //     nextNextFrame.total.and.returnValue(7);
    //     addFrameAndSetScore(frame);
    //     addFrameAndSetScore(nextFrame);
    //     addFrameAndSetScore(nextNextFrame);
    //
    //     scoreCard.updatePreviousFrameScore();
    //
    //     expect(scoreCard.scores).toEqual([25, 17, 7]);
    //   });
    // });
  });

  function addFrameAndSetScore(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setScore();
  }
});
