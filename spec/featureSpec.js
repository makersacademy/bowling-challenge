'use strict'

describe('features', function() {

  var scorecard;
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });



  describe('roll a frame and retrieve scores', function() {
    it('can return the result of a roll', function() {
      frame.rollOne(0);
      frame.rollTwo(0);
      scorecard.addFrame(frame);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
      expect(scorecard.getFrames()[0].results[0]).toEqual(0);
    });
  });



});
