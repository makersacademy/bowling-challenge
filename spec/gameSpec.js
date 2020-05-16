'use strict';

describe('ScoreCard', () => {

  let scorecard;
  let frame;

  beforeEach(() => {
    scorecard = new ScoreCard();
    frame = jasmine.createSpyObj(Frame, ['total']);
  });

  it('holds game frames in an array', () => {
    expect(scorecard.frames).toBeInstanceOf(Array);
  });

  describe('addToFrames', () => {
    it('can add a new frame to frames array', () => {
      scorecard.addToFrames(frame);

      expect(scorecard.frames).toContain(frame);
    });
  });

});
