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

  describe('#setRolls', () => {
    it('can keep track of the score for each frame', () => {
      addFrameAndSetRolls(frame);

      expect(scoreCard.gameRolls).toContain(frame.rolls);
    });
  });

  // describe('#getScores', () => {
  //   it('returns the scores for each frame', () => {
  //     addFrameAndSetScore(frame);
  //
  //     expect(scoreCard.getScores()).toContain(frame.rolls);
  //   });
  // });

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
