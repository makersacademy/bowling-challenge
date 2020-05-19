'use strict';

describe('ScoreCard', () => {

  let scoreCard;
  let frame;
  let frame2;
  let frame3;

  beforeEach(() => {
    scoreCard = new ScoreCard();
    frame = new Frame();
    // frame = jasmine.createSpyObj(Frame, ['getRolls', 'rolls', 'roll']);
    // frame2 = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'roll']);
    // frame3 = jasmine.createSpyObj(Frame, ['total', 'getRolls', 'rolls', 'roll']);
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

  describe('#setRolls', () => {
    it('can keep track of the rolls for each frame', () => {
      addFrameAndSetRolls(frame);

      expect(scoreCard.gameRolls).toContain(frame.rolls);
    });
  });

  describe('#setScore', () => {
    it('keeps track of the frames scores', () => {
      // frame.roll.withArgs(5);
      // frame.roll.withArgs(3);
      // frame.getRolls.and.returnValue([5, 3]);
      frame.roll(5);
      frame.roll(3);
      scoreCard.addToFrames(frame);
      scoreCard.setRolls();
      scoreCard.setScore();

      expect(scoreCard.score).toContain(8);
    });
  });

  describe('#getScore', () => {
    it('returns the scores for each frame', () => {
      frame.roll(5);
      frame.roll(3);
      addFrameAndSetRolls(frame);
      scoreCard.setScore();

      expect(scoreCard.getScore()).toContain(8);
    });
  });

  // describe('#updateFrameScore', () => {
  //   describe('when a spare frame is followed by a normal frame', () => {
  //     it('updates the previous frame with spare bonus', () => {
  //       frame.setRolls.withArgs(5);
  //       frame.setRolls.withArgs(5);
  //       addFrameAndSetScore(frame);
  //       frame2.setRolls.withArgs(4);
  //       frame2.setRolls.withArgs(3);
  //       addFrameAndSetScore(frame2);
  //
  //       scoreCard.updateFrameScore();
  //
  //       expect(scoreCard.getScores()).toEqual([5, 5], [4, 3]);
  //     });
  //   });
  // });

  function addFrameAndSetRolls(frame) {
    scoreCard.addToFrames(frame);
    scoreCard.setRolls();
  }
});
