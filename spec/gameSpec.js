'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let frame2;
  let frame3;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = jasmine.createSpyObj(Frame, ['getRolls', 'rolls', 'setRolls']);
    frame2 = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'setRolls']);
    frame3 = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'setRolls']);
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

      expect(scoreCard.scores).toContain(frame.rolls);
    });
  });

  describe('#getScores', () => {
    it('returns the scores for each frame', () => {
      addFrameAndSetScore(frame);

      expect(scoreCard.getScores()).toContain(frame.rolls);
    });
  });

  // describe('#updateFrameScore', () => {
  //   describe('when a strike frame is followed by a normal frame', () => {
  //     it('updates the previous frame with strike bonus', () => {
  //       frame.total.and.returnValue(10);
  //       addFrameAndSetScore(frame);
  //       frame2.total.and.returnValue(7);
  //       addFrameAndSetScore(frame2);
  //
  //       scoreCard.updateFrameScore();
  //
  //       expect(scoreCard.getScores()).toEqual([17, 7]);
  //     });
  //   });

    // describe('when a strike frame is followed by another strike frame', () => {
    //   it('updates the previous frame with the correct bonus', () => {
    //     frame.total.and.returnValue(9);
    //     scoreCard.addToFrames(frame);
    //     scoreCard.setScore();
    //     frame2.total.and.returnValue(10);
    //     addFrameAndSetScore(frame2);
    //     frame3.total.and.returnValue(7);
    //     addFrameAndSetScore(frame3);
    //
    //     scoreCard.updateFrameScore();
    //
    //     expect(scoreCard.getScores()).toContain([25, 17, 7]);
    //   });
    // });
  // });

  function addFrameAndSetScore(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setScore();
  }
});
